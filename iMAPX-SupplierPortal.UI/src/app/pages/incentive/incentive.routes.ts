import { Routes } from '@angular/router';
import { CalculateIncentiveComponent } from './calculate-incentive/calculate-incentive.component';
import { IncentiveWeekComponent } from './incentive-week/incentive-week.component';
import { ProductionCalendarComponent } from './production-calendar/production-calendar.component';


export const CuttingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'incentive-week',
    pathMatch: 'full'
  },
  {
    path: 'incentive-week',
    component: IncentiveWeekComponent,
    data: {
      title: 'Incentive Week',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Incentive', url: '/incentive' },
        { title: 'Incentive Week' }
      ]
    }
  },
  {
    path: 'calculate-incentive',
    component: CalculateIncentiveComponent,
    data: {
      title: 'Calculate Incentive',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Incentive', url: '/incentive' },
        { title: 'Calculate Incentive' }
      ]
    }
  },
  {
    path: 'production-calender',
    component: ProductionCalendarComponent,
    data: {
      title: 'Production Calendar',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Incentive', url: '/incentive' },
        { title: 'Production Calendar' }
      ]
    }
  },
];
