import { Injectable, inject } from '@angular/core';
import { Login } from '../../interfaces/login';
import { DatabaseService } from '../database/database.service';
import { Register } from '../../interfaces/register';
import { SessionService } from '../session/session.service';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private databaseService = inject(DatabaseService);

  constructor() {}

  login(login: Login) {
    return this.databaseService.Login(login);
  }

  register(userData: Register) {
    return this.databaseService.register(userData);
  }

  logout(sessionId: string) {
    return this.databaseService.logout(sessionId);
  }

  getSession(user:User){
    return this.databaseService.getSession(user);
  }
}
