import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList! : User[]
  constructor(private _userService : UserService) {
    this.getUsers();
  }

  ngOnInit(): void {

  }

  getUsers(){
    return this._userService.getUsers()
      .subscribe(data => this.usersList = data);
  }
}
