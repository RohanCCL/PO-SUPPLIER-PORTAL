import { Routes } from '@angular/router';
import { AqlReceiveComponent } from './aql-receive/aql-receive.component';
import { AqlReverseComponent } from './aql-reverse/aql-reverse.component';
import { AqlReverseScanComponent } from './aql-reverse-scan/aql-reverse-scan.component';
import { AuditBoardComponent } from './audit-board/audit-board.component';
import { FixAuditLevelComponent } from './fix-audit-level/fix-audit-level.component';
import { ManageQcBonusComponent } from './manage-qc-bonus/manage-qc-bonus.component';
import { ReturnToRecorrectComponent } from './return-to-recorrect/return-to-recorrect.component';
import { SampleTransferComponent } from './sample-transfer/sample-transfer.component';
import { SampleTransferReversComponent } from './sample-transfer-revers/sample-transfer-revers.component';

export const AQLRoutes: Routes = [
  {
    path: 'aql-receive',
    component: AqlReceiveComponent,
    data: {
      title: 'AQL Receive',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: 'AQL Receive' }
      ]
    }
  },
  {
    path: 'aql-reverse',
    component: AqlReverseScanComponent,
    data: {
      title: 'AQL Reverse',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: 'AQL Reverse' }
      ]
    }
  },
  {
    path: 'aql-reverse-scan',
    component: AqlReverseComponent,
    data: {
      title: 'AQL Reverse Scan',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: 'AQL Reverse Scan' }
      ]
    }
  },
  {
    path: 'audit-board',
    component: AuditBoardComponent ,
    data: {
      title: 'Audit Board',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: 'Audit Board' }
      ]
    }
  },
  {
    path: 'fix-audit-level',
    component: FixAuditLevelComponent,
    data: {
      title: 'Fix Audit Level',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: ' Fix Audit Level' }
      ]
    }
  },
  {
    path: 'manage-qc-bonus',
    component: ManageQcBonusComponent,
    data: {
      title: 'Manage QC Bonus',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: 'Manage QC Bonus' }
      ]
    }
  },
  {
    path: 'return-to-recorrect',
    component: ReturnToRecorrectComponent,
    data: {
      title: 'Return to Recorrect',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: ' Return to Recorrect' }
      ]
    }
  },
  {
    path: 'sample-transfer',
    component: SampleTransferComponent,
    data: {
      title: 'Sample Transfer',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: ' Sample Transfer' }
      ]
    }
  },
  {
    path: 'sample-transfer-revers',
    component: SampleTransferReversComponent,
    data: {
      title: 'Sample Transfer Revers',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'AQL', url: '/aql' },
        { title: ' Sample Transfer Revers' }
      ]
    }
  },
];
