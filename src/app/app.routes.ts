import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/auth/home/home.component';
import { authGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
