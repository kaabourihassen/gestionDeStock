import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user! : User
  @Input() index! : number

  isIndexPair(){
    if(this.index/2==0)
      return true
    else
      return false
  }

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {

  }
  deleteUser(userId:Number){
    this._adminService.deleteUser(userId)
  }
  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
