import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Magazin} from "../../models/Magazin";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MagazinService {

  constructor(private http: HttpClient, private _router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMagazins(): Observable<Magazin[]>{
    return this.http.get<Magazin[]>(`${environment.apiUrl}/magazins`).pipe(retry(1),catchError(this.handleError));
  }

  getMagazin(magazinId:Number) : Observable<Magazin>{
    return this.http.get<Magazin>(`${environment.apiUrl}/magazins/${magazinId}`).pipe(retry(1),catchError(this.handleError));
  }
  deleteMagazin(magazinId:Number) {
    this.http.delete(`${environment.apiUrl}/magazins/${magazinId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  createMagazin(magazin:Magazin): Observable < Magazin > {
    return this.http.post<Magazin>(`${environment.apiUrl}/magazins`, magazin,this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateMagazin(magazinId:Number,magazin:Magazin): Observable<Magazin>{
    return this.http.put<Magazin>(`${environment.apiUrl}/magazins/${magazinId}`, magazin,this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(err: any){
    return throwError(err);
  }
}
