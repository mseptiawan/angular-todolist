import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    LoginComponent, // Pastikan LoginComponent sudah dideklarasikan di sini
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule, // Pastikan AppRoutingModule diimpor
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
