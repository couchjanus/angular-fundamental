import { Routes } from '@angular/router';

import { RegisterComponent, LoginComponent, ProfileComponent } from '../../user';
import { AuthGuard } from '../../guards';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
