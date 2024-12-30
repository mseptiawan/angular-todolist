import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect default ke dashboard
  { path: 'dashboard', component: DashboardComponent }, // Rute dashboard
  { path: 'login', component: LoginComponent }, // Rute login
  { path: '**', redirectTo: '/login' }, // Semua rute tidak valid diarahkan ke login

  { path: 'register', component: RegisterComponent },
];
