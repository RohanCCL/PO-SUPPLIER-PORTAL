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
        path: 'cutting',
        loadChildren: () => 
          import('./pages/cutting/cutting.routes').then(m => m.CuttingRoutes),
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
      {
        path: 'srp',
        loadChildren: () => 
          import('./pages/srp/srp.routes').then(m => m.SRPRoutes),
      },
      {
        path: 'aql',
        loadChildren: () => 
          import('./pages/aql/aql.routes').then(m => m.AQLRoutes),
      },
      {
        path: 'fg',
        loadChildren: () => 
          import('./pages/fg/fg.routes').then(m => m.FGRoutes),
      },
      {
        path: 'production',
        loadChildren: () => 
          import('./pages/production/production.routes').then(m => m.ProductionRoutes),
      },
      {
        path: 'inquires',
        loadChildren: () => 
          import('./pages/inquires/inquires.routes').then(m => m.InquiresRoutes),
      },
      {
        path: 'rejection',
        loadChildren: () => 
          import('./pages/rejection/rejection.routes').then(m => m.RejectionRoutes),
      },
      {
        path: 'incentive',
        loadChildren: () => 
          import('./pages/incentive/incentive.routes').then(m => m.CuttingRoutes),
      },
      {
        path: 'reports',
        loadChildren: () => 
          import('./pages/reports/report.routes').then(m => m.ReportRoutes),
      },
      {
        path: 'stock',
        loadChildren: () => 
          import('./pages/stock/stock.routes').then(m => m.StockRoutes),
      },
      {
        path: 'embellishment',
        loadChildren: () => 
          import('./pages/embellishment/embellishment.routes').then(m => m.EmbellishmentRoutes),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./pages/applications/applications.routes').then(m => m.ApplicationsRoutes),
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('./pages/manage/manage.routes').then(m => m.ManageRoutes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
