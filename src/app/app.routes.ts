import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '',      redirectTo: 'profits', pathMatch: 'full' },
    { path: 'profits', component: AppComponent },
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);
