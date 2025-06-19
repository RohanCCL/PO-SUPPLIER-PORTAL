import { Routes } from '@angular/router';
import { TeamProgressChartComponent } from './team-progress-chart/team-progress-chart.component';
import { SrpStatusComponent } from './srp-status/srp-status.component';
import { StockTakeComponent } from './stock-take/stock-take.component';
import { PrintTagComponent } from './print-tag/print-tag.component';
import { AddWorkStationComponent } from './add-work-station/add-work-station.component';


export const InquiresRoutes: Routes = [
  {
    path: 'team-progress-chart',
    component: TeamProgressChartComponent,
    data: {
      title: 'Team Progress Chart',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inquires', url: '/inquires' },
        { title: 'Team Progress Chart' }
      ]
    }
  },
  {
    path: 'srp-status',
    component: SrpStatusComponent,
    data: {
      title: 'SRP Status',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inquires', url: '/inquires' },
        { title: 'SRP Status' }
      ]
    }
  },
  {
    path: 'stock-take',
    component: StockTakeComponent,
    data: {
      title: 'Stock Take',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inquires', url: '/inquires' },
        { title: 'Stock Take' }
      ]
    }
  },
  {
    path: 'print-tag',
    component: PrintTagComponent,
    data: {
      title: 'Print Tag',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inquires', url: '/inquires' },
        { title: 'Print Tag' }
      ]
    }
  },
  {
    path: 'add-work-station',
    component: AddWorkStationComponent,
    data: {
      title: 'Add Work Station',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inquires', url: '/inquires' },
        { title: 'Add Work Station' }
      ]
    }
  },
];
