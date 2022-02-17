import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/User";
import {AdminService} from "../../../../services/admin/admin.service";

@Component({
  selector: 'app-admin-admin-list',
  templateUrl: './admin-admin-list.component.html',
  styleUrls: ['./admin-admin-list.component.scss']
})
export class AdminAdminListComponent implements OnInit {

  usersList! : User[]
  constructor(private _adminService: AdminService) {
    this.getAdminsList()
  }

  ngOnInit(): void {

  }
  getAdminsList(){
    this._adminService.getAdmins().subscribe(data => this.usersList = data)
  }

}
