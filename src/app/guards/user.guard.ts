import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AllService} from '../services/all.service';

@Injectable()
export class UserGuard implements CanActivate {

  constructor(private router: Router,
              private userService: AllService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

    console.log('canActivate guard works!');

    if (this.userService.isLoggedIn == false) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
