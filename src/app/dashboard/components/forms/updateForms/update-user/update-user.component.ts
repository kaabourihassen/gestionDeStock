import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userId! : Number
  user! : User
  constructor(private _userService : UserService,private route:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getOneUser()
  }
  form = new FormGroup({
    cin : new FormControl(""),
    fullName : new FormControl("",Validators.required),
    email : new FormControl("",[Validators.required,Validators.email]),
    age : new FormControl("",Validators.required)
  })
  updateUser() {
    const user = {
      cin : this.form.get("cin")?.value,
      fullName : this.form.get("fullName")?.value,
      email : this.form.get("email")?.value,
      age : this.form.get("age")?.value
    }
    this._userService.updateUser(this.userId,user)
      .subscribe(res => {
        console.log("done")
      }, err => {
        console.log(err.message)
      })
    this._router.navigate(['usersList'])
  }
  async getOneUser(){
    this.userId = Number(this.route.snapshot.paramMap.get('userId'))
    this.user = await this._userService.getUser(this.userId).toPromise()
    this.form.setValue({
      cin : this.user.cin,
      fullName : this.user.fullName,
      email : this.user.email,
      age : this.user.age
    })
  }
}
