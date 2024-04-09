import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { passwordMatchValidator } from '../../../functions/Validators';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session/session.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private AuthService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  SessionService = inject(SessionService);
  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator() }
    );
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  GoToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    let register = {
      Username: this.username!.value,
      Email: this.email!.value,
      Password: this.password!.value,
      // ConfirmPassword: this.confirmPassword!.value,
    };

    this.AuthService.register(register).subscribe({
      next: (response) => {
        // Redirect user or show success message
        this.SessionService.setSession(response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Show error message
      },
    });
  }
}
