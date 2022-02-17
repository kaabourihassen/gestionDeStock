import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/User";
import {AdminService} from "../../../../services/admin/admin.service";

@Component({
  selector: 'app-admin-resp-art-list',
  templateUrl: './admin-resp-art-list.component.html',
  styleUrls: ['./admin-resp-art-list.component.scss']
})
export class AdminRespArtListComponent implements OnInit {

  usersList! : User[]
  constructor(private _adminService: AdminService) {
    this.getRESPARTList()
  }

  ngOnInit(): void {

  }

  getRESPARTList(){
    this._adminService.getRESPARTs().subscribe(data => this.usersList = data)
  }
}
