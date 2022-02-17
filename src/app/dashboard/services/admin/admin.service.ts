import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/dashboard/ListUsers`)
  }
  getRESPMATs():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/admin/ListRestMat`)
  }
  getRESPARTs():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/admin/ListRestArt`)
  }
  getAdmins():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/admin/ListAdmin`)
  }

  changeRoleToUser(userId:Number){
    this.http.put(`${environment.apiUrl}/admin/demoteToUser/${userId}`,null)
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }
  changeRoleToRESPMAT(userId:Number){
    this.http.put(`${environment.apiUrl}/admin/evolveToRESPMAT/${userId}`,null)
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }
  changeRoleToRESPART(userId:Number){
    this.http.put(`${environment.apiUrl}/admin/evolveToRESPART/${userId}`,null)
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }
  changeRoleToAdmin(userId:Number){
    this.http.put(`${environment.apiUrl}/admin/evolveToAdmin/${userId}`,null)
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  deleteUser(userId:Number) {
    this.http.delete(`${environment.apiUrl}/admin/DeleteUser/${userId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  handleError(err: any){
    return throwError(err);
  }
}
