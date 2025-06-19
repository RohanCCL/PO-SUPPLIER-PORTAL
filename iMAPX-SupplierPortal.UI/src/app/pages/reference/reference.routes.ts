import { Routes } from '@angular/router';
import { FgMasterUpdateComponent } from './fg-master-update/fg-master-update.component';
import { OperationMasterComponent } from './operation-master/operation-master.component';
import { OperationTemplateComponent } from './operation-template/operation-template.component';
import { StyleOperationComponent } from './style-operation/style-operation.component';
import { TeamOperationsComponent } from './team-operations/team-operations.component';
import { WoProcessComponent } from './wo-process/wo-process.component';

export const ReferenceRoutes: Routes = [
  {
    path: 'fg-master-update',
    component: FgMasterUpdateComponent,
    data: {
      title: 'FG Master Update',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: 'FG Master Update' }
      ]
    }
  },
  {
    path: 'operation-master',
    component: OperationMasterComponent,
    data: {
      title: 'Operation Master',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: 'Operation Master' }
      ]
    }
  },
  {
    path: 'operation-template',
    component: OperationTemplateComponent,
    data: {
      title: 'Operation Template',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: 'Operation Template' }
      ]
    }
  },
  {
    path: 'style-operation',
    component: StyleOperationComponent,
    data: {
      title: 'Style Operation',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: ' Style Operation' }
      ]
    }
  },
  {
    path: 'team-operations',
    component: TeamOperationsComponent,
    data: {
      title: 'Team Operations',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: ' Team Operations' }
      ]
    }
  },
  {
    path: 'wo-process',
    component: WoProcessComponent,
    data: {
      title: 'WO Process',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reference', url: '/reference' },
        { title: ' WO Process' }
      ]
    }
  },
];
