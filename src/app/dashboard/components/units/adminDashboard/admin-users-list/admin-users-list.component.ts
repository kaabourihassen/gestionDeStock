import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/User";
import {AdminService} from "../../../../services/admin/admin.service";

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit {
  usersList! : User[]
  constructor(private _adminService: AdminService) {
    this.getUsersList()
  }

  ngOnInit(): void {

  }
  getUsersList(){
    this._adminService.getUsers().subscribe(data => this.usersList = data)
  }

}
