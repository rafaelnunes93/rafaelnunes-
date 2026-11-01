import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, PLATFORM_ID, computed, inject, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { HOME_ANCHORS, pagePath } from '../../core/paths';
import { SeoService } from '../../core/seo.service';
import { ThemeService } from '../../core/theme.service';
import { LAYOUT } from '../../data/layout';
import { SITE } from '../../data/site';
import { TranslationService } from '../../services/translation.service';

interface NavItem {
  label: string;
  path: string;
  fragment?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly tr = inject(TranslationService);
  readonly theme = inject(ThemeService);
  private readonly seo = inject(SeoService);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly t = LAYOUT;
  readonly site = SITE;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  private readonly drawer = viewChild<ElementRef<HTMLElement>>('drawer');
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  readonly lang = this.tr.currentLang;
  readonly homePath = computed(() => pagePath('home', this.lang()));
  readonly contact = computed(() => ({ path: this.homePath(), fragment: HOME_ANCHORS.contact[this.lang()] }));

  readonly nav = computed<NavItem[]>(() => {
    const lang = this.lang();
    const home = pagePath('home', lang);
    const items: NavItem[] = [
      { label: this.tr.pick(LAYOUT.nav.services), path: pagePath('services', lang) },
      { label: this.tr.pick(LAYOUT.nav.cases), path: pagePath('cases', lang) },
    ];
    if (lang === 'pt') items.push({ label: LAYOUT.nav.blog.pt, path: pagePath('blog', 'pt') });
    items.push({ label: this.tr.pick(LAYOUT.nav.faq), path: home, fragment: HOME_ANCHORS.faq[lang] });
    return items;
  });

  readonly mobileNav = computed<NavItem[]>(() => [
    ...this.nav(),
    { label: this.tr.pick(LAYOUT.nav.about), path: pagePath('about', this.lang()) },
  ]);

  /** Link do seletor de idioma: a mesma página no outro idioma, ou a home dele. */
  readonly otherLangPath = computed(() => {
    const other = this.lang() === 'pt' ? 'en' : 'pt';
    return this.seo.alternates()[other] ?? pagePath('home', other);
  });

  constructor() {
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu(false));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.menuOpen()) return;
    if (event.key === 'Escape') {
      this.closeMenu();
      return;
    }
    if (event.key === 'Tab') this.trapFocus(event);
  }

  openMenu(): void {
    this.menuOpen.set(true);
    this.doc.body.style.overflow = 'hidden';
    if (this.isBrowser) setTimeout(() => this.focusables()[0]?.focus());
  }

  closeMenu(returnFocus = true): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.doc.body.style.overflow = '';
    if (returnFocus) this.menuButton()?.nativeElement.focus();
  }

  private focusables(): HTMLElement[] {
    const root = this.drawer()?.nativeElement;
    return root ? Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')) : [];
  }

  private trapFocus(event: KeyboardEvent): void {
    const items = this.focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && this.doc.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && this.doc.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
