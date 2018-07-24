import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Routing
import { AppRouterModule } from './app-router/app-router.module';
// import { routing } from './app-router/app-router.module';

// Подключаем модули к главному модулю приложения
import { BlogModule } from './blog/blog.module';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule, // Routing
    // routing,
    BlogModule,
    ShopModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
