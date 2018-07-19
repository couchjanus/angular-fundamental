import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// Routing
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooComponent } from './foo.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';

// Routing
const rootRouting: ModuleWithProviders = RouterModule.forRoot(
  [], { useHash: true }
);

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    rootRouting, // Routing
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
