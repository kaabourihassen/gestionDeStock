import { Component, OnInit } from '@angular/core';
import {AuthGuard} from "../../authTests/guard/auth/auth.guard";
import {AuthService} from "../../services/auth/auth.service";
import {HasRoleGuard} from "../../authTests/guard/hasRole/has-role.guard";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isClosed= false
  canActivate!:boolean
  constructor(private _authGuard : AuthGuard,private _authService : AuthService) {
    this.canActivate = this._authGuard.canActivate()
  }

  ngOnInit(): void {
  }

  hideLink(){
    if(localStorage.getItem("role")=="ADMIN")
      return 3
    else if(localStorage.getItem("role")=="RESP_MAT" || localStorage.getItem("role")=="ADMIN")
      return 1
    else if(localStorage.getItem("role")=="RESP_ART" || localStorage.getItem("role")=="ADMIN")
      return 2

    return 0
  }

  logout() {
    this._authService.logOut()
  }
}
