import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/User";
import {AdminService} from "../../../../services/admin/admin.service";

@Component({
  selector: 'app-admin-resp-mat-list',
  templateUrl: './admin-resp-mat-list.component.html',
  styleUrls: ['./admin-resp-mat-list.component.scss']
})
export class AdminRespMatListComponent implements OnInit {

  usersList! : User[]
  constructor(private _adminService: AdminService) {
    this.getRESPMATList()
  }

  ngOnInit(): void {
  }
  getRESPMATList(){
    this._adminService.getRESPMATs().subscribe(data => this.usersList = data)
  }
}
