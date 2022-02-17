import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../models/User";

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  user!: User;
  constructor(private _authService :AuthService) {

  }
  isAllowed :boolean = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isAuthorized(route))
      this.isAllowed=true
    else
      this.isAllowed=false
    return this.isAuthorized(route);
  }
  isAuthorized(route: ActivatedRouteSnapshot):boolean {
    const userRole = this._authService.getUserFromToken(this._authService.getToken()!).role
    const role = route.data.role;
    if(role.includes(userRole)){
      return true;
    }else {
      return false;
    }
  }

}
