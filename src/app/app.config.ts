import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { ParamRouteReuseStrategy } from './core/param-route-reuse.strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideClientHydration(withEventReplay()),
    { provide: RouteReuseStrategy, useClass: ParamRouteReuseStrategy },
  ],
};
