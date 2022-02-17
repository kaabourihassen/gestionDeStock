import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserSession} from "../../../models/UserSession";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService : AuthService,private _router : Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    cin : new FormControl("",Validators.required),
    fullName : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    age : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  })
  invalidRegistration!: boolean;
  register(){
    const user = {
      cin : this.form.get("cin")?.value,
      fullName:this.form.get("fullName")?.value,
      email : this.form.get("email")?.value,
      age : this.form.get("age")?.value,
      password : this.form.get("password")?.value
    }
    this._authService.registration(user).subscribe(response =>{
      this._router.navigate(['/login'])
    },err =>{
      this.invalidRegistration = true
    })
  }
}
