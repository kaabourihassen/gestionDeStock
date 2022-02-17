import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/User";
import {AdminService} from "../../../../services/admin/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-unit',
  templateUrl: './admin-unit.component.html',
  styleUrls: ['./admin-unit.component.scss']
})
export class AdminUnitComponent implements OnInit {
  @Input() index! : number
  @Input() user! : User
  constructor(private _adminService: AdminService, private _router: Router) { }

  ngOnInit(): void {
    this.user.role = this.user.authorities?.["0"].authority
  }

  changeToADMIN(userId:Number) {
    this._adminService.changeRoleToAdmin(userId)
    this._router.navigate(['/adminDashboard/adminAdminList'])
  }

  changeToUser(userId: Number) {
    this._adminService.changeRoleToUser(userId)
    this._router.navigate(['/adminDashboard/adminUsersList'])
  }

  changeToRESPART(userId: Number) {
    this._adminService.changeRoleToRESPART(userId)
    this._router.navigate(['/adminDashboard/adminRESPARTsList'])
  }

  changeToRESPMAT(userId: Number) {
    this._adminService.changeRoleToRESPMAT(userId)
    this._router.navigate(['/adminDashboard/adminRESPMATsList'])
  }
  deleteUser(userId:Number){
    this._adminService.deleteUser(userId)
  }

  isMe() {
    if (this.user.userId == Number(localStorage.getItem('UserId'))){
      return true
    }else{
      return false
    }
  }
}
