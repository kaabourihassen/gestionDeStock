import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/dashboard/models/Article';
import {ArticleService} from "../../../services/products/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article! : Article
  @Input() index! : number
  constructor(private _articleService : ArticleService, private _router: Router) { }

  ngOnInit(): void {
  }

  deleteArticle(articleId : Number){
    this._articleService.deleteArticle(articleId);
    this._router.navigate(['articlesList'])
  }

  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
