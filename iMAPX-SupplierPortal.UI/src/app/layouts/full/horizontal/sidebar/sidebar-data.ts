import { NavItem } from '../../vertical/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/starter',
  },
  {
    navCap: 'Other',
  },
  {
    displayName: 'Users',
    iconName: 'user',
    children: [
      {
        displayName: 'Login as  Different User',
        route: '/users/login-as-different-user',
      },
      {
        displayName: 'Create User Group',
        route: '/users/create-user-group',
      },
      {
        displayName: 'User Creation',
        route: '/users/user-creation',
      },
      {
        displayName: 'Reset Password',
        route: '/users/reset-password',
      },
    ],
  },
 
];
