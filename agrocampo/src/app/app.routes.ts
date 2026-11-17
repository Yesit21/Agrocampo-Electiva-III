
import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [

  // Primera pantalla: Registro
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },

  // Registro
  {
    path: 'registro',
    component: Register
  },

  // Login
  {
    path: 'login',
    component: Login
  },

  // Vistas privadas
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'cultivos',
        loadComponent: () =>
          import('./features/crops/crops')
            .then(m => m.Crops)
      },
      {
        path: 'analizar',
        loadComponent: () =>
          import('./features/plant-analysis/plant-analysis')
            .then(m => m.PlantAnalysis)
      },
      {
        path: 'historial',
        loadComponent: () =>
          import('./features/diagnostics-history/diagnostics-history')
            .then(m => m.DiagnosticsHistory)
      },
      {
        path: 'biblioteca',
        loadComponent: () =>
          import('./features/disease-library/disease-library')
            .then(m => m.DiseaseLibrary)
      },
      {
        path: 'alertas',
        loadComponent: () =>
          import('./features/alerts/alerts')
            .then(m => m.Alerts)
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/profile/profile')
            .then(m => m.Profile)
      }
    ]
  },

  // Rutas desconocidas
  {
    path: '**',
    redirectTo: 'registro'
  }
];
