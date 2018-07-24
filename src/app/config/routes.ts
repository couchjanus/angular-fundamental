import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { BlogModule } from '../blog/blog.module';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    {
      path: 'blog',
      // loadChildren: () => BlogModule
      // lazy loaded
      loadChildren: '../blog/blog.module#BlogModule'
    },
    { path: '**', component: NotFoundComponent },
];
