import { Routes } from '@angular/router';
import { ManualSrpCreationComponent } from './manual-srp-creation/manual-srp-creation.component';
import { AdditionalSrpComponent } from './additional-srp/additional-srp.component';
import { PrintSrpComponent } from './print-srp/print-srp.component';
import { SrpQtyChangeComponent } from './srp-qty-change/srp-qty-change.component';

export const SRPRoutes: Routes = [

  {
    path: 'manual-srp-creation',
    component: ManualSrpCreationComponent,
    data: {
      title: 'Manual SRP Creation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Manual SPR Creation' }
      ]
    }
  },
  {
    path: 'additional-srp',
    component: AdditionalSrpComponent,
    data: {
      title: 'Additional SRP',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Additional SRP' }
      ]
    }
  },
  {
    path: 'print-srp',
    component: PrintSrpComponent,
    data: {
      title: 'Print SRP',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Print SRP' }
      ]
    }
  },
  {
    path: 'srp-qty-change',
    component: SrpQtyChangeComponent,
    data: {
      title: 'SRP Qty Change',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' SRP Qty Change' }
      ]
    }
  },
];
