import { Routes } from '@angular/router';
import { SizeMasterComponent } from './size-master/size-master.component';
import { UpdateSizeMasterComponent } from './update-size-master/update-size-master.component';
import { SizeGridComponent } from './size-grid/size-grid.component';



export const ManageRoutes: Routes = [
  {
    path: 'size-master',
    component: SizeMasterComponent,
    data: {
      title: 'Size Master',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Manage', url: '/manage' },
        { title: 'Size Master' }
      ]
    }
  },
  {
    path: 'update-size-master',
    component: UpdateSizeMasterComponent,
    data: {
      title: 'Update Size Master',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Manage', url: '/manage' },
        { title: 'Update Size Master' }
      ]
    }
  },
  {
    path: 'size-grid',
    component: SizeGridComponent,
    data: {
      title: 'Size Grid',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Manage', url: '/manage' },
        { title: 'Size Grid' }
      ]
    }
  },

];
