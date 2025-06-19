import { Routes } from "@angular/router";
import { POCreateComponent } from "./supplier-portal/supplier-portal.component";

export const POCreateRoutes: Routes = [
    {
        path: "po-create",
        component: POCreateComponent,
        data: {
            title: 'SUPPLIER PORTAL',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'PO', url: '/PO' },
              { title: 'PO List' },
            ],
          },
    }
];