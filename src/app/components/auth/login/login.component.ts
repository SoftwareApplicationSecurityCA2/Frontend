import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../functions/Validators';
import { SessionService } from '../../../services/session/session.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private AuthService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  SessionService = inject(SessionService);
  LoginForm: FormGroup;

  constructor() {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }

  GoToRegister(){
    this.router.navigate(['/register']);
  }

  login() {
    let login = {
      email: this.email!.value,
      password: this.password!.value,
    };

    this.AuthService.login(login).subscribe({
      next: (response: any) => {
        // Get the session
        this.AuthService.getSession(response.value[0]).subscribe((data) => {
          this.SessionService.setSession(data);
          this.router.navigate(['/home']);
        });

      // this.SessionService.setSession(response);
        // this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Show error message
      },
    });
  }
}

