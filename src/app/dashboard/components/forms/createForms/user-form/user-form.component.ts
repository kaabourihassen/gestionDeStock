import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private _userService : UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    CIN : new FormControl(""),
    fullName : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    age : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  })
  createUser() {
    const user = {
      cin : this.form.get("CIN")?.value,
      fullName : this.form.get("fullName")?.value,
      email : this.form.get("email")?.value,
      age : this.form.get("age")?.value,
      password : this.form.get("password")?.value
    }
    this._userService.createUser(user)
      .subscribe(res => {
        console.log("done")
      }, err => {
        console.log(err.message)
      })
    this._router.navigate(['usersList'])
  }
}
