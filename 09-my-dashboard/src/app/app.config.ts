import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // Aplica transiciones generales a todas las vistas en una ruta. Sumamente útil para animaciones de carga de una forma directa y sencilla.
      withViewTransitions({
        skipInitialTransition: true,
        // Nos da mucha informacion de la ruta que se esta cargando, la ruta anterior y la ruta actual
        // onViewTransitionCreated( transitionInfo ) {
        //   console.log({transitionInfo});
        // },
      }),
    ),

    importProvidersFrom(
      HttpClientModule,
    )

  ]
};


