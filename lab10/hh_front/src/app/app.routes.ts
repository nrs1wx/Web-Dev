import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

export const routes: Routes = [
    {
        path: 'companies', 
        component: CompanyListComponent,
    },
    {
        path: '',
        redirectTo: 'companies',
        pathMatch: 'full',
    }
];
