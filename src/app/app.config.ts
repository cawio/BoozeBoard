import { ApplicationConfig } from '@angular/core';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const MAT_FORMFIELD_DEFAULT_APPEARANCE: MatFormFieldDefaultOptions = {
    appearance: 'outline',
    hideRequiredMarker: true,
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: MAT_FORMFIELD_DEFAULT_APPEARANCE,
        },
    ],
};
