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
        path: 'starter',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.routes').then((m) => m.UsersRoutes),
      },
     
      {
        path: 'po',
        loadChildren: () => 
          import('./pages/PO/po.routes').then(m => m.POCreateRoutes),
      },
      
      {
        path: 'reference',
        loadChildren: () => 
          import('./pages/reference/reference.routes').then(m => m.ReferenceRoutes),
      },
  
     
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
