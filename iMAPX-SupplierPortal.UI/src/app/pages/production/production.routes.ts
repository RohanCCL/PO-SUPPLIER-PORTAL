import { Routes } from '@angular/router';
import { TeamScanNewComponent } from './team-scan-new/team-scan-new.component';
import { TeamScanBarcodeComponent } from './team-scan-barcode/team-scan-barcode.component';
import { TeamScanReverseComponent } from './team-scan-reverse/team-scan-reverse.component';
import { OperationScanComponent } from './operation-scan/operation-scan.component';
import { OperationScanUploadComponent } from './operation-scan-upload/operation-scan-upload.component';
import { BundleTransferProdComponent } from './bundle-transfer-prod/bundle-transfer-prod.component';
import { TeamTransferReverseComponent } from './team-transfer-reverse/team-transfer-reverse.component';
import { BundleRejectComponent } from './bundle-reject/bundle-reject.component';
import { SplitBundleComponent } from './split-bundle/split-bundle.component';
import { FgTransferComponent } from './fg-transfer/fg-transfer.component';
import { BundleQtyChangeComponent } from './bundle-qty-change/bundle-qty-change.component';
import { TeamTransferComponent } from './team-transfer/team-transfer.component';
import { SoteamSequanceComponent } from './soteam-sequance/soteam-sequance.component';

export const ProductionRoutes: Routes = [
  {
    path: 'team-scan-new',
    component: TeamScanNewComponent,
    data: {
      title: 'Team Scan New',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Team Scan New' }
      ]
    }
  },
  {
    path: 'team-scan-barcode',
    component: TeamScanBarcodeComponent,
    data: {
      title: 'Team Scan Barcode',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Team Scan Barcode' }
      ]
    }
  },
  {
    path: 'team-scan-reverse',
    component: TeamScanReverseComponent,
    data: {
      title: 'Team Scan Reverse',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Team Scan Reverse' }
      ]
    }
  },
  {
    path: 'operation-scan',
    component: OperationScanComponent,
    data: {
      title: 'Operation Scan',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Operation Scan' }
      ]
    }
  },
  {
    path: 'operation-scan-upload',
    component: OperationScanUploadComponent,
    data: {
      title: 'Operation Scan Upload',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Operation Scan Upload' }
      ]
    }
  },
  {
    path: 'bundle-transfer-prod',
    component: BundleTransferProdComponent,
    data: {
      title: 'Bundle Transfer Prod',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Bundle Transfer Prod' }
      ]
    }
  },
  {
    path: 'team-transfer-reverse',
    component: TeamTransferReverseComponent,
    data: {
      title: 'Team Transfer Reverse',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Team Transfer Reverse' }
      ]
    }
  },
  {
    path: 'bundle-reject',
    component: BundleRejectComponent,
    data: {
      title: 'Bundle Reject',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Bundle Reject' }
      ]
    }
  },
  {
    path: 'split-bundle',
    component: SplitBundleComponent,
    data: {
      title: 'Split Bundle',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Split Bundle' }
      ]
    }
  },
  {
    path: 'fg-transfer',
    component: FgTransferComponent,
    data: {
      title: 'FG Transfer',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'FG Transfer' }
      ]
    }
  },
  {
    path: 'fg-transfer',
    component: FgTransferComponent,
    data: {
      title: 'FG Transfer',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'FG Transfer' }
      ]
    }
  },
  {
    path: 'bundle-qty-change',
    component: BundleQtyChangeComponent,
    data: {
      title: 'Bundle Qty Change',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Bundle Qty Change' }
      ]
    }
  },
  {
    path: 'team-transfer',
    component: TeamTransferComponent,
    data: {
      title: 'Team Transfer',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'Team Transfer' }
      ]
    }
  },
  {
    path: 'soteam-sequance',
    component: SoteamSequanceComponent,
    data: {
      title: 'SOTeam Sequance',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Production', url: '/production' },
        { title: 'SOTeam Sequance' }
      ]
    }
  },
];
