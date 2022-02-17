import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Materiel} from "../../../models/Materiel";
import {environment} from "../../../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  constructor(private http: HttpClient, private _router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMateriels(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${environment.apiUrl}/produits/materiels`).pipe(retry(1),catchError(this.handleError));;
  }
  getMaterielsByPris(pris : boolean): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${environment.apiUrl}/produits/materiels/materielPris/${pris}`).pipe(retry(1),catchError(this.handleError));;
  }
  getMateriel(materielId:Number): Observable<Materiel>{
    return this.http.get<Materiel>(`${environment.apiUrl}/produits/materiels/${materielId}`).pipe(retry(1),catchError(this.handleError));;
  }

  deleteMateriel(materielId:Number) {
    this.http.delete(`${environment.apiUrl}/produits/materiels/${materielId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  createMateriel(materiel:Materiel): Observable < Materiel > {
    return this.http.post<Materiel>(`${environment.apiUrl}/produits/materiels`, JSON.stringify(materiel),this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateMateriel(materielId:Number,materiel:Materiel): Observable<Materiel>{
    return this.http.put<Materiel>(`${environment.apiUrl}/produits/materiels/${materielId}`,JSON.stringify(materiel),this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(err: any){
    return throwError(err);
  }
}
