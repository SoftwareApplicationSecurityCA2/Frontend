import { Injectable, WritableSignal, signal } from '@angular/core';
import { Session } from '../../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  public session: WritableSignal<Session | null> = signal(null);

  constructor() { }


  setSession(session: Session){
    this.session.set(session);
  }

  getUserID(){
    return this.session()?.userId;
  }


  getSession(){
    return this.session
  }

  getSessionId(){
    return this.session()?.sessionId;
  }

  isLoggedIn(){
    return  this.session()?.userId ? true : false;
  }

  clearSession(){
    this.session.set(null);
  }
  
}
