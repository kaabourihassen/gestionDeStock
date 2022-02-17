import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/User";
import {environment} from "../../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private _router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/dashboard/ListUsers`).pipe(retry(1),catchError(this.handleError));
  }

  getUser(userId:Number):Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/dashboard/ListUsers/${userId}`).pipe(retry(1),catchError(this.handleError));
  }

  createUser(user:User): Observable < User > {
    return this.http.post<User>(`${environment.apiUrl}/dashboard/InsertOuvrier`, JSON.stringify(user),this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateUser(userId:Number,user:User): Observable<User>{
    return this.http.put<User>(`${environment.apiUrl}/dashboard/updateUser/${userId}`,JSON.stringify(user),this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(err: any){
    return throwError(err);
  }
}
