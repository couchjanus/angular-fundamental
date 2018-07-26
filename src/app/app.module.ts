import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Подключаем модули к главному модулю приложения
import { SharedModule } from './shared';
import { BlogModule } from './blog/blog.module';
import { ShopModule } from './shop/shop.module';
// import { AdminModule } from './admin/admin.module';

// Routing
import { AppRouterModule } from './app-router/app-router.module';
// import { routing } from './app-router/app-router.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule, // Routing
    BlogModule,
    BrowserAnimationsModule,
    ShopModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
