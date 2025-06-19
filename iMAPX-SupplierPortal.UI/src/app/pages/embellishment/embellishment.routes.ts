import { Routes } from '@angular/router';
import { EmbGrnComponent } from './emb-grn/emb-grn.component';
import { EmbSendSgComponent } from './emb-send-sg/emb-send-sg.component';


export const EmbellishmentRoutes: Routes = [
  {
    path: 'emb-grn',
    component: EmbGrnComponent,
    data: {
      title: 'Emb: GRN',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Embellishment', url: '/embellishment' },
        { title: 'Emb: GRN' }
      ]
    }
  },
  {
    path: 'emb-send-sg',
    component: EmbSendSgComponent,
    data: {
      title: 'Emb: Send SG',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Embellishment', url: '/embellishment' },
        { title: 'Emb: Send SG' }
      ]
    }
  },
];
