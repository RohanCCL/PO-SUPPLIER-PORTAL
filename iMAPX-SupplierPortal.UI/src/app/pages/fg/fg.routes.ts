import { Routes } from '@angular/router';
import { FgDeliveryComponent } from './fg-delivery/fg-delivery.component';
import { FgEocComponent } from './fg-eoc/fg-eoc.component';
import { GatepassComponent } from './gatepass/gatepass.component';
import { PackCartonComponent } from './pack-carton/pack-carton.component';
import { PackDataComponent } from './pack-data/pack-data.component';
import { PackingListComponent } from './packing-list/packing-list.component';
import { ReverseFgComponent } from './reverse-fg/reverse-fg.component';
import { ReverseFgScanComponent } from './reverse-fg-scan/reverse-fg-scan.component';
import { ScanFgComponent } from './scan-fg/scan-fg.component';

export const FGRoutes: Routes = [
  {
    path: 'scan-fg',
    component: ScanFgComponent,
    data: {
      title: 'Scan FG',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Scan FG' }
      ]
    }
  },
  {
    path: 'reverse-fg',
    component: ReverseFgComponent,
    data: {
      title: 'Reverse FG',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Reverse FG' }
      ]
    }
  },
  {
    path: 'reverse-fg-scan',
    component: ReverseFgScanComponent,
    data: {
      title: 'Reverse FG Scan',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Reverse FG Scan' }
      ]
    }
  },
  {
    path: 'fg-eoc',
    component: FgEocComponent,
    data: {
      title: 'FG EOC',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'FG EOC' }
      ]
    }
  },
  {
    path: 'fg-delivery',
    component: FgDeliveryComponent,
    data: {
      title: 'FG Delivery',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'FG Delivery' }
      ]
    }
  },
  {
    path: 'packing-list',
    component: PackingListComponent,
    data: {
      title: 'Packing List',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Packing List' }
      ]
    }
  },
  {
    path: 'gatepass',
    component: GatepassComponent,
    data: {
      title: 'Gatepass',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Gatepass' }
      ]
    }
  },
  {
    path: 'pack-carton',
    component: PackCartonComponent,
    data: {
      title: 'Pack Carton',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Pack Carton' }
      ]
    }
  },
  {
    path: 'pack-data',
    component: PackDataComponent,
    data: {
      title: 'Pack Data',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'FG', url: '/fg' },
        { title: 'Pack Data' }
      ]
    }
  },
];
