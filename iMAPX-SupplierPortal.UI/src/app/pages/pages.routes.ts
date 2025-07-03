import { Routes } from '@angular/router';
import { BandwidthUsageComponent } from './starter/starter.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: BandwidthUsageComponent,
    data: {
      title: 'Dashboard ',
      urls: [
        { title: 'Home', url: '/Dashboard' },
        { title: 'Dashboard' },
      ],
    },
  },
];
