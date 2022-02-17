import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {UserSession} from "../../../models/UserSession";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userSession! :UserSession
  constructor(private _authService : AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    email : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  })
  invalidLogin!: boolean;
  login(){
    const user = {
      email : this.form.get("email")?.value,
      password : this.form.get("password")?.value
    }
    this._authService.login(user).subscribe(response =>{
        const user = new UserSession(
          response.token,
          response.id,
          response.email,
          response.role,
          response.fullName
        )
        localStorage.setItem('token',user.token)
        localStorage.setItem('email',user.email)
        localStorage.setItem(`role`,user.role)
        localStorage.setItem('fullName',user.fullName)
        localStorage.setItem('UserId',user.id)
        this._router.navigate([''])
    },err =>{
      this.invalidLogin = true
    })
  }
}
