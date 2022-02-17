import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {UserSession} from "../../models/UserSession";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: UserSession;
  constructor(private http:HttpClient, private _router: Router) {
  }

  login(user : User){
    return this.http.post<UserSession>(`${environment.apiUrl}/auth/signin`,user)

  }

  public registration(user : User){
    return this.http.post( `${environment.apiUrl}/auth/register`,user)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.clear()
    window.location.reload()
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getUserFromToken(token:String): UserSession{
    return JSON.parse(atob(token.split(".")[1])) as UserSession
  }
}
