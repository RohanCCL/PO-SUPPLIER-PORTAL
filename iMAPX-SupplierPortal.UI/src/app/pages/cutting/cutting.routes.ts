import { Routes } from '@angular/router';
import { TagAllocationComponent } from './tag-allocation/tag-allocation.component';
import { TagDeallocationComponent } from './tag-deallocation/tag-deallocation.component';
import { TagReallocationComponent } from './tag-reallocation/tag-reallocation.component';
import { BundleTransferComponent } from './bundle-transfer/bundle-transfer.component';
import { BundleUsabilityComponent } from './bundle-usability/bundle-usability.component';
import { DocketCreationComponent } from './docket-creation/docket-creation.component';
import { DocketConfirmationComponent } from './docket-confirmation/docket-confirmation.component';
import { DocketCreationRuleComponent } from './docket-creation-rule/docket-creation-rule.component';
import { DocketPriorityComponent } from './docket-priority/docket-priority.component';

export const CuttingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tag-allocation',
    pathMatch: 'full'
  },
  {
    path: 'tag-allocation',
    component: TagAllocationComponent,
    data: {
      title: 'Tag Allocation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Tag Allocation' }
      ]
    }
  },
  {
    path: 'tag-deallocation',
    component: TagDeallocationComponent,
    data: {
      title: 'Tag Deallocation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Tag Deallocation' }
      ]
    }
  },
  {
    path: 'tag-reallocation',
    component: TagReallocationComponent,
    data: {
      title: 'Tag Reallocation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: 'Tag Reallocation' }
      ]
    }
  },
  {
    path: 'bundle-transfer',
    component: BundleTransferComponent,
    data: {
      title: 'Bundle Transfer',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Bundle Transfer' }
      ]
    }
  },
  {
    path: 'bundle-usability',
    component: BundleUsabilityComponent,
    data: {
      title: 'Bundle Usability',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Bundle Usability' }
      ]
    }
  },
  {
    path: 'docket-creation',
    component: DocketCreationComponent,
    data: {
      title: 'Docket Creation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Docket Creation' }
      ]
    }
  },
  {
    path: 'docket-creation-rule',
    component: DocketCreationRuleComponent,
    data: {
      title: 'Docket Creation (Rule)',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Docket Creation (Rule)' }
      ]
    }
  },
  {
    path: 'docket-confirmation',
    component: DocketConfirmationComponent,
    data: {
      title: 'Docket Creation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Docket Confirmation' }
      ]
    }
  },
  {
    path: 'docket-priority',
    component: DocketPriorityComponent,
    data: {
      title: 'Docket Priority',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Cutting', url: '/cutting' },
        { title: ' Docket Priority' }
      ]
    }
  },
];
