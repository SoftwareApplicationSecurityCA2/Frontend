import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { SessionService } from './services/session/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CA2Frontend';

  constructor(
    private AuthService: AuthService,
    private SessionService: SessionService,
    private Router: Router
  ) {}

  logout() {
    this.AuthService.logout(this.SessionService.getSessionId()!).subscribe(
      () => {
        this.SessionService.clearSession();
        this.Router.navigate(['/login']);
      }
    );
  }

  submitFeedback() {
    this.Router.navigate(['/feedback']);
  }

  goToProfile() {
    var userID = this.SessionService.getUserID();

    this.Router.navigate(['/profile/' + userID]);
  }

  goToHome(){
    this.Router.navigate(['/home']);
  }
}
