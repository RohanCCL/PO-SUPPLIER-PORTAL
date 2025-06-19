import { Routes } from "@angular/router";
import { AddApplicationComponent } from "./add-application/add-application.component";

export const ApplicationsRoutes: Routes = [
    {
        path: "add-applications",
        component: AddApplicationComponent,
        data: {
            title: 'Add Applications',
            urls: [
              { title: 'Dashboard', url: '/dashboard' },
              { title: 'Applications', url: '/applications' },
              { title: 'Add Applications' },
            ],
          },
    }
];