import { Routes } from '@angular/router';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { CreateUserGroupComponent } from './create-user-group/create-user-group.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginAsDifferentUserComponent } from './login-as-different-user/login-as-different-user.component';

export const UsersRoutes: Routes = [
  {
    path: 'user-creation',
    component: UserCreationComponent,
    data: {
      title: 'User Creation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Users', url: '/users' },
        { title: 'User Creation' },
      ],
    },
  },
  {
    path: 'create-user-group',
    component: CreateUserGroupComponent,
    data: {
      title: 'Create User Group',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Users', url: '/users' },
        { title: 'Create User Group' },
      ],
    },
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset Password',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Users', url: '/users' },
        { title: 'Reset Password' },
      ],
    },
  },
  {
    path: 'login-as-different-user',
    component: LoginAsDifferentUserComponent,
    data: {
      title: 'Login as Different User',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Login as Different User' },
      ],
    },
  },
];
