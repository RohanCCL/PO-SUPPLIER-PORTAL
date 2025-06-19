import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FullComponent } from './layouts/full/full.component';
import { AppSideLoginComponent } from './pages/authentication/side-login/side-login.component';
import { LoginGuard } from './guards/login.guard';
export const routes: Routes = [
  {
    path: 'login',
    component: AppSideLoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./pages/authentication/authentication.routes').then((m) => m.AuthenticationRoutes),
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
 
      {
        path: 'po',
        loadChildren: () => 
          import('./pages/PO/po.routes').then(m => m.POCreateRoutes),
      },
      
      {
        path: 'aql',
        loadChildren: () => 
          import('./pages/aql/aql.routes').then(m => m.AQLRoutes),
      },
     
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
