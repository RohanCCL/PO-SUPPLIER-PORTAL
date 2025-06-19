import { Routes } from '@angular/router';

import { AppErrorComponent } from './error/error.component';
import { AppSideLoginComponent } from './side-login/side-login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { SignoutComponent } from './signout/signout.component';
import { LoginGuard } from 'src/app/guards/login.guard';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error',
        component: AppErrorComponent,
      },

      {
        path: 'login',
        component: AppSideLoginComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'signout',
        component: SignoutComponent,
      },
    ],
  },
];
