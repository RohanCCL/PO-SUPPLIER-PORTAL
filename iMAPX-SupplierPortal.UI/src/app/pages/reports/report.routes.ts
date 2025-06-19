import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';


export const ReportRoutes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent,
    data: {
      title: 'Reports',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reports', url: '/report' },
      ]
    }
  },
];
