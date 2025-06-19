import { Routes } from '@angular/router';
import { RejectCpsgComponent } from './reject-cpsg/reject-cpsg.component';
import { RejectReceiveCwrComponent } from './reject-receive-cwr/reject-receive-cwr.component';
import { RejectionGatepassComponent } from './rejection-gatepass/rejection-gatepass.component';
import { ReverseCwrReceivingComponent } from './reverse-cwr-receiving/reverse-cwr-receiving.component';
import { ReverseCpsgRejectionComponent } from './reverse-cpsg-rejection/reverse-cpsg-rejection.component';
import { ReversePendingGatepassComponent } from './reverse-pending-gatepass/reverse-pending-gatepass.component';


export const RejectionRoutes: Routes = [
  {
    path: 'reject-cpsg',
    component: RejectCpsgComponent,
    data: {
      title: 'Reject CP/SG',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Reject CP/SG' }
      ]
    }
  },
  {
    path: 'reject-receive-cwr',
    component: RejectReceiveCwrComponent,
    data: {
      title: 'Reject Receive CWR',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Rejection Receive CWR' }
      ]
    }
  },
  {
    path: 'rejection-gatepass',
    component: RejectionGatepassComponent,
    data: {
      title: 'Rejection Gatepass',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Rejection Gatepass' }
      ]
    }
  },
  {
    path: 'reverse-cwr-receiving',
    component: ReverseCwrReceivingComponent,
    data: {
      title: 'Reverse CWR Receiving',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Reverse CWR Receiving' }
      ]
    }
  },
  {
    path: 'reverse-cpsg-rejection',
    component: ReverseCpsgRejectionComponent,
    data: {
      title: 'Reverse CP/SG Rejection',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Reverse CP/SG Rejection' }
      ]
    }
  },
  {
    path: 'reverse-pending-gatepass',
    component: ReversePendingGatepassComponent,
    data: {
      title: 'Reverse Pending Gatepass',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Rejection', url: '/rejection' },
        { title: 'Reverse Pending Gatepass' }
      ]
    }
  },
];
