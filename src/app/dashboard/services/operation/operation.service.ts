import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Operation} from "../../models/Operation";
import {environment} from "../../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient, private _router: Router) { }

  getOperationsArticles():Observable<Operation[]>{
    return this.http.get<Operation[]>(`${environment.apiUrl}/operations/articles`)
      .pipe(retry(1),catchError(this.handleError));
  }
  getOperationsMateriels():Observable<Operation[]>{
    return this.http.get<Operation[]>(`${environment.apiUrl}/operations/materiels`)
      .pipe(retry(1),catchError(this.handleError));
  }

  createOperation(operation : Operation):Observable<Operation>{
    return this.http.post<Operation>(`${environment.apiUrl}/operations`,operation)
      .pipe(retry(1),catchError(this.handleError));
  }


  getOneOperation(operationId : Number):Observable<Operation>{
    return this.http.get<Operation>(`${environment.apiUrl}/operations/${operationId}`)
      .pipe(retry(1),catchError(this.handleError));
  }

  deleteOperation(operationId : Number){
    this.http.delete(`${environment.apiUrl}/operations/deleteOperation/${operationId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      })
  }

  handleError(err: any){
    return throwError(err);
  }
}
