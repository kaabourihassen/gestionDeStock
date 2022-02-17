import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {Category} from "../../models/Category";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`).pipe(retry(1),catchError(this.handleError));
  }

  getCategory(categoryId : Number): Observable<Category>{
    return this.http.get<Category>(`${environment.apiUrl}/categories/${categoryId}`).pipe(retry(1),catchError(this.handleError));
  }

  deleteCategory(categoryId:Number) {
    this.http.delete(`${environment.apiUrl}/categories/${categoryId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  createCategory(category:Category): Observable < Category > {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, category,this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateCategory(categoryId:Number,category:Category): Observable<Category>{
    return this.http.put<Category>(`${environment.apiUrl}/categories/${categoryId}`,JSON.stringify(category),this.httpOptions)
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(err: any){
    return throwError(err);
  }
}
