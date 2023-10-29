import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router)
  const loggedIn = localStorage.getItem("isloggedin")
  if(loggedIn === "false"){
    alert("notAuthencated user")
    _router.navigate(['login']);
  }
  return true;
};
