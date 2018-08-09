import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';

// Подключаем модули к главному модулю приложения
import { SharedModule } from './shared';
import { BlogModule } from './blog/blog.module';
import { ShopModule } from './shop/shop.module';
// import { AdminModule } from './admin/admin.module';
// import { LoginComponent } from './user';

// Routing
import { AppRouterModule } from './app-router/app-router.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// import { EmailValidatorDirective } from './directives';
import { AlertService, AuthService } from './services';

import { AlertComponent, EmailValidatorDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,
    AboutComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule, // Routing
    BlogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShopModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  providers: [
    AlertService,
    AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
