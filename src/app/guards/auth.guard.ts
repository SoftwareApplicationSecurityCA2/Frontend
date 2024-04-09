import { inject } from '@angular/core';
import { CanActivateFn, Router  } from '@angular/router';
import { SessionService } from '../services/session/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  
   const sessionService: SessionService = inject(SessionService);
  const router: Router = inject(Router);

  if (sessionService.isLoggedIn()) {
    // User is logged in, allow navigation
    return true;
  } else {
    // User is not logged in, redirect to login page
    router.navigate(['/login']);
    return false;
  }
};
