import {
  ApplicationConfig,
  inject,
  NgZone,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  NavigationEnd,
  provideRouter,
  Router,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { YandexMetrikaService } from './services/yandex-metrika.service';
import { environment } from './environments/environment';
import { filter } from 'rxjs/operators';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
      }),
    ),
    provideEnvironmentInitializer(() => {
      const ym = inject(YandexMetrikaService);
      const router = inject(Router);
      const zone = inject(NgZone);

      ym.init(environment.metrikaCounterId, {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: environment.production,
      });

      zone.runOutsideAngular(() => {
        router.events
          .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
          .subscribe((e) => ym.hit(e.urlAfterRedirects));
      });
    }),
  ],
};
