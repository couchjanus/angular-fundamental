import { Routes } from '@angular/router';

import { RegisterComponent } from '../../user';


export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    // {
    //     path: '',
    //     redirectTo: 'profile',
    //     pathMatch: 'full'
    // },
    // {
    //     // path: '',
    //     // component: LayoutComponent,
    //     children : [
    //         // { path: 'profile', component: DashboardComponent },
    //         { path: 'register', component: RegisterComponent },
    //     ]
    // },
    // {
    //     path: 'error',
    //     component: ErrorComponent
    // },
];
