import { CanActivateFn } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const toastr = inject(ToastrService)

  if(sessionStorage.getItem('username')){
    return true;
  }
  else{
    toastr.warning('Pleas Login First')
    router.navigateByUrl('')
    return false
  }
};
