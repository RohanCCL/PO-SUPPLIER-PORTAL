import { Routes } from '@angular/router';
import { PhysicalStockCpComponent } from './physical-stock-cp/physical-stock-cp.component';
import { RejectionStockComponent } from './rejection-stock/rejection-stock.component';
import { StockAdministartionComponent } from './stock-administartion/stock-administartion.component';


export const StockRoutes: Routes = [
  {
    path: 'physical-stock-cp',
    component: PhysicalStockCpComponent,
    data: {
      title: 'Physical Stock CP',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Stock', url: '/stock' },
        { title: 'Physical Stock CP' }
      ]
    }
  },
  {
    path: 'rejection-stock',
    component: RejectionStockComponent,
    data: {
      title: 'Rejection Stock',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Stock', url: '/stock' },
        { title: 'Rejection Stock' }
      ]
    }
  },
  {
    path: 'stock-administration',
    component: StockAdministartionComponent,
    data: {
      title: 'Stock Administration',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Stock', url: '/stock' },
        { title: 'Stock Administration                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ' }
      ]
    }
  },
];
