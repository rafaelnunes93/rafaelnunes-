import { Component, computed, inject, input } from '@angular/core';
import { HOME_ANCHORS } from '../core/paths';
import { CONTACT } from '../data/home';
import type { FormType } from '../data/services';
import { SITE, whatsappLink } from '../data/site';
import { TranslationService } from '../services/translation.service';
import { RevealDirective } from '../shared/reveal.directive';
import { LeadFormComponent } from './lead-form.component';

// Seção de contato (fundo escuro com grade; versão clara no tema claro). Usada na home e no fim das páginas internas.
@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [LeadFormComponent, RevealDirective],
  template: `
    <section class="contact" [id]="anchorId() ?? anchor()">
      <div class="container-x grid">
        <div class="copy" reveal>
          <span class="eyebrow">{{ tr.pick(t.eyebrow) }}</span>
          <h2 class="h-section">{{ title() ?? tr.pick(t.title) }}</h2>
          <p class="sub">{{ tr.pick(t.subtitle) }}</p>
          <ol class="steps">
            @for (s of t.steps; track $index; let i = $index) {
              <li><span class="n">{{ i + 1 }}</span>{{ tr.pick(s) }}</li>
            }
          </ol>
          <p class="other">{{ tr.pick(t.otherChannel) }}</p>
          <div class="channels">
            <a [href]="whatsapp()" target="_blank" rel="noopener noreferrer">
              <span class="ch-icon wa"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
              <span><strong>{{ tr.pick(t.whatsappTitle) }}</strong><small>{{ tr.pick(t.whatsappText) }}</small></span>
            </a>
            <a [href]="'mailto:' + site.email">
              <span class="ch-icon"><i class="fa-regular fa-envelope" aria-hidden="true"></i></span>
              <span><strong>{{ tr.pick(t.emailTitle) }}</strong><small>{{ site.email }}</small></span>
            </a>
          </div>
        </div>
        <div reveal="80"><app-lead-form [preset]="preset()" /></div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      position: relative;
      margin-top: 40px;
      padding-block: 88px;
      color: #e6edf3;
      background:
        linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px) 0 0 / 48px 48px,
        linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px) 0 0 / 48px 48px,
        linear-gradient(160deg, #050816 0%, #062a1d 55%, #0b3d4a 100%);
      @media (min-width: 992px) { padding-block: 112px; }
      &::before {
        content: ''; position: absolute; left: 0; right: 0; top: -39px; height: 40px; background: #050816;
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 40' preserveAspectRatio='none'%3E%3Cpath d='M0 40V22C240 4 480 0 720 12s480 26 720 8v20z'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 40' preserveAspectRatio='none'%3E%3Cpath d='M0 40V22C240 4 480 0 720 12s480 26 720 8v20z'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
      }
    }
    .grid { display: grid; gap: 48px; @media (min-width: 992px) { grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: start; } }
    .eyebrow { color: #5eead4; }
    .h-section { color: #fff; }
    .sub { margin-top: 16px; color: #b6c2cf; max-width: 52ch; }
    .steps {
      list-style: none; padding: 0; margin: 28px 0 0; display: grid; gap: 16px;
      li { display: flex; gap: 14px; color: #d3dbe4; font-size: 0.95rem; }
      .n { flex: none; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(0,255,136,0.14); color: #00ff88; font-weight: 700; font-size: 0.8rem; }
    }
    .other { margin-top: 36px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #8fa3b5; }
    .channels {
      display: grid; gap: 12px; margin-top: 14px;
      a { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: #fff; }
      a:hover { border-color: rgba(0,255,136,0.5); color: #fff; }
      strong { display: block; font-size: 0.95rem; }
      small { color: #9fb0c0; font-size: 0.8rem; }
    }
    .ch-icon { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.08); font-size: 1.1rem; }
    .ch-icon.wa { background: #0b7a3e; }

    // Tema claro: mesma composição, em tons de verde claro
    :host-context([data-theme='light']) {
      .contact {
        color: var(--ink);
        background:
          linear-gradient(rgba(4,120,87,0.06) 1px, transparent 1px) 0 0 / 48px 48px,
          linear-gradient(90deg, rgba(4,120,87,0.06) 1px, transparent 1px) 0 0 / 48px 48px,
          radial-gradient(700px 420px at 0% 0%, rgba(16,185,129,0.18), transparent 70%),
          radial-gradient(600px 420px at 100% 100%, rgba(6,182,212,0.14), transparent 70%),
          linear-gradient(160deg, #eef8f2 0%, #e3f4ea 55%, #dff1f4 100%);
        &::before { background: #eef8f2; }
      }
      .eyebrow { color: var(--primary); }
      .h-section { color: var(--ink); }
      .sub { color: var(--muted); }
      .steps li { color: var(--ink-2); }
      .steps .n { background: var(--primary); color: #fff; }
      .other { color: var(--subtle); }
      .channels a {
        border-color: var(--line-2); background: rgba(255,255,255,0.75); color: var(--ink);
        box-shadow: 0 1px 2px rgba(7,19,13,0.04);
      }
      .channels a:hover { border-color: var(--primary); color: var(--ink); }
      .channels small { color: var(--muted); }
      .ch-icon { background: var(--primary-soft); color: var(--primary); }
      .ch-icon.wa { background: #0b7a3e; color: #fff; }
    }
  `,
})
export class ContactSectionComponent {
  readonly tr = inject(TranslationService);
  readonly t = CONTACT;
  readonly site = SITE;
  /** Título personalizado (ex.: "Vamos conversar sobre {serviço}?"). */
  readonly title = input<string>();
  readonly preset = input<FormType>();
  readonly whatsappMessage = input<string>();
  readonly anchorId = input<string>();

  readonly anchor = computed(() => HOME_ANCHORS.contact[this.tr.currentLang()]);
  readonly whatsapp = computed(() => whatsappLink(this.tr.currentLang(), this.whatsappMessage()));
}
