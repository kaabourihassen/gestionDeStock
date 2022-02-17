import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "../../../models/Article";
import {environment} from "../../../../../environments/environment";
import { Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private _router: Router) { }



  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.apiUrl}/produits/articles`).pipe(retry(1),catchError(this.handleError));
  }
  getArticle(articleId:Number): Observable<Article>{
    return this.http.get<Article>(`${environment.apiUrl}/produits/articles/${articleId}`).pipe(retry(1),catchError(this.handleError));
  }
  deleteArticle(articleId:Number) {
    this.http.delete(`${environment.apiUrl}/produits/articles/${articleId}`)
      .pipe(retry(1),catchError(this.handleError))
      .subscribe(res => {
        console.log("done")
      }, error => {
        console.log(error)
      });
  }

  createArticle(article:Article): Observable < Article > {
    return this.http.post<Article>(`${environment.apiUrl}/produits/articles`, article)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateArticle(articleId:Number,article:Article): Observable<Article>{
    return this.http.put<Article>(`${environment.apiUrl}/produits/articles/${articleId}`,article)
      .pipe(retry(1),catchError(this.handleError));
  }

  handleError(err: any){
    return throwError(err);
  }
}
