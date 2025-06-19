import { NavItem } from './nav-item/nav-item';

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
    navCap: 'Admin',
  },
  {
    displayName: 'Users',
    iconName: 'user',
    children: [
      {
        displayName: 'Login as  Different User',
        iconName: 'point',
        route: '/users/login-as-different-user',
      },
      {
        displayName: 'Create User Group',
        iconName: 'point',
        route: '/users/create-user-group',
      },
      {
        displayName: 'User Creation',
        iconName: 'point',
        route: '/users/user-creation',
      },
      {
        displayName: 'Reset Password',
        iconName: 'point',
        route: '/users/reset-password',
      },
    ],
  },
 
 {
    displayName: 'PO',
    iconName: 'cards-filled',
    children: [
      {
        displayName: 'PO Creation',
        iconName: 'point',
        route: '/po/po-create',
      },
     
    ],
  },
 
  
 
];
