import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';

import { AppComponent } from '../app.component';
import { AdminComponent } from '../components/admin/admin.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { LoginComponent } from '../components/login/login.component';
import { VacationComponent } from '../components/vacation/vacation.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationInterceptor } from '../interceptors/AuthenticationInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    CustomerComponent,
    LoginComponent,
    VacationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [     {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
