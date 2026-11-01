import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SiteFooterComponent } from './layout/footer/site-footer.component';
import { FloatingActionsComponent } from './layout/floating/floating-actions.component';
import { ScrollProgressComponent } from './layout/scroll-progress.component';
import { CookieBannerComponent } from './layout/cookie-banner.component';
import { AnalyticsService } from './core/analytics.service';
import { LAYOUT } from './data/layout';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SiteFooterComponent, FloatingActionsComponent, ScrollProgressComponent, CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly tr = inject(TranslationService);
  readonly t = LAYOUT;

  constructor() {
    inject(AnalyticsService); // carrega GA4/Clarity quando houver consentimento
  }
}
