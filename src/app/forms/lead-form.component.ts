import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, PLATFORM_ID, afterNextRender, computed, inject, input, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LEAD_FORM } from '../data/lead-form';
import type { FormType } from '../data/services';
import { SITE, whatsappLink } from '../data/site';
import { TranslationService } from '../services/translation.service';

interface LeadModel {
  tipo: FormType | '';
  descricao: string;
  tamanho: string;
  prazo: string;
  investimento: string;
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  site: string; // honeypot
  consentimento: boolean;
}

type Errors = Partial<Record<keyof LeadModel, string>>;

const DRAFT_KEY = 'lead-draft';
const UTM_KEY = 'lead-utm';
const EMPTY: LeadModel = {
  tipo: '', descricao: '', tamanho: '', prazo: '', investimento: '',
  nome: '', empresa: '', email: '', whatsapp: '', site: '', consentimento: false,
};

// Formulário em 3 etapas. Envia JSON para o webhook do n8n (SITE.leadWebhook);
// sem webhook configurado ou em caso de erro, oferece o envio do resumo pelo WhatsApp.
@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.scss',
})
export class LeadFormComponent {
  readonly tr = inject(TranslationService);
  readonly t = LEAD_FORM;
  /** Tipo pré-selecionado (páginas de serviço). */
  readonly preset = input<FormType>();

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('root');
  private startedAt = Date.now();

  readonly step = signal(1);
  readonly errors = signal<Errors>({});
  readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  readonly errorMessage = signal('');
  model: LeadModel = { ...EMPTY };

  readonly percent = computed(() => Math.round((this.step() / 3) * 100));
  readonly stepTitle = computed(() => this.tr.pick(this.t.stepOf).replace('{n}', String(this.step())));

  constructor() {
    if (!this.isBrowser) return;
    afterNextRender(() => {
      this.restoreDraft();
      const preset = this.preset();
      if (preset && !this.model.tipo) this.model.tipo = preset;
      this.captureUtm();
      this.startedAt = Date.now();
    });
  }

  next(): void {
    if (!this.validate(this.step())) return;
    this.step.update((s) => Math.min(3, s + 1));
    this.focusStep();
  }

  back(): void {
    this.step.update((s) => Math.max(1, s - 1));
    this.errors.set({});
    this.focusStep();
  }

  saveDraft(): void {
    if (!this.isBrowser) return;
    try {
      const { site, consentimento, ...draft } = this.model;
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // sem armazenamento: o rascunho não é salvo
    }
  }

  onPhoneInput(value: string): void {
    const d = value.replace(/\D/g, '').slice(0, 11);
    let masked = d;
    if (d.length > 2) masked = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 6) masked = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    this.model.whatsapp = masked;
    this.saveDraft();
  }

  async submit(): Promise<void> {
    if (this.step() < 3) {
      this.next();
      return;
    }
    if (!this.validate(3)) return;

    // Honeypot preenchido: finge sucesso e não envia.
    if (this.model.site) {
      this.status.set('success');
      return;
    }
    const elapsedMs = Date.now() - this.startedAt;
    if (elapsedMs < 3000) {
      this.errorMessage.set(this.tr.pick(this.t.tooFast));
      this.status.set('error');
      return;
    }

    if (!SITE.leadWebhook) {
      this.errorMessage.set('');
      this.status.set('error');
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch(SITE.leadWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.payload(elapsedMs)),
      });
      if (!res.ok) throw new Error(String(res.status));
      this.status.set('success');
      try {
        sessionStorage.removeItem(DRAFT_KEY);
      } catch {
        // ignora
      }
    } catch {
      this.errorMessage.set('');
      this.status.set('error');
    }
  }

  retry(): void {
    this.status.set('idle');
  }

  /** Link do WhatsApp com o resumo do que foi preenchido. */
  whatsappSummary(): string {
    const m = this.model;
    const typeLabel = this.t.types.find((x) => x.value === m.tipo);
    const lines = [
      this.tr.pick(this.t.waIntro),
      typeLabel ? `• ${this.tr.pick(typeLabel.label)}` : '',
      m.descricao ? `• ${m.descricao}` : '',
      m.prazo ? `• ${this.label(this.t.deadlines, m.prazo)}` : '',
      m.nome ? `— ${m.nome}${m.empresa ? ` (${m.empresa})` : ''}` : '',
    ].filter(Boolean);
    return whatsappLink(this.tr.currentLang(), lines.join('\n'));
  }

  error(field: keyof LeadModel): string | undefined {
    return this.errors()[field];
  }

  private label(list: { value: string; label: { pt: string; en: string } }[], value: string): string {
    const found = list.find((x) => x.value === value);
    return found ? this.tr.pick(found.label) : value;
  }

  private validate(step: number): boolean {
    const m = this.model;
    const e: Errors = {};
    const req = this.tr.pick(this.t.required);
    if (step === 1) {
      if (!m.tipo) e.tipo = this.tr.pick(this.t.typeError);
      if (m.descricao.trim().length < 20) e.descricao = this.tr.pick(this.t.descError);
    }
    if (step === 2) {
      if (!m.tamanho) e.tamanho = req;
      if (!m.prazo) e.prazo = req;
    }
    if (step === 3) {
      if (m.nome.trim().length < 2) e.nome = req;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.email.trim())) e.email = this.tr.pick(this.t.emailError);
      const digits = m.whatsapp.replace(/\D/g, '').length;
      if (digits < 10 || digits > 11) e.whatsapp = this.tr.pick(this.t.phoneError);
      if (!m.consentimento) e.consentimento = this.tr.pick(this.t.consentError);
    }
    this.errors.set(e);
    const first = Object.keys(e)[0];
    if (first && this.isBrowser) {
      setTimeout(() => this.root().nativeElement.querySelector<HTMLElement>(`[name="${first}"]`)?.focus());
    }
    return !first;
  }

  private focusStep(): void {
    if (!this.isBrowser) return;
    setTimeout(() => this.root().nativeElement.querySelector<HTMLElement>('.step-title')?.focus());
  }

  private payload(elapsedMs: number) {
    const { site, ...data } = this.model;
    let utm: Record<string, string> = {};
    try {
      utm = JSON.parse(sessionStorage.getItem(UTM_KEY) ?? '{}');
    } catch {
      // ignora
    }
    return {
      ...data,
      idioma: this.tr.currentLang(),
      origem: { pagina: location.pathname, ...utm },
      consentimentoEm: new Date().toISOString(),
      elapsedMs,
    };
  }

  private restoreDraft(): void {
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (raw) this.model = { ...EMPTY, ...JSON.parse(raw) };
    } catch {
      // rascunho inválido: começa vazio
    }
  }

  private captureUtm(): void {
    try {
      if (sessionStorage.getItem(UTM_KEY)) return;
      const params = new URLSearchParams(location.search);
      const utm: Record<string, string> = { entrada: location.pathname };
      params.forEach((v, k) => {
        if (k.startsWith('utm_')) utm[k] = v;
      });
      sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
    } catch {
      // ignora
    }
  }
}
