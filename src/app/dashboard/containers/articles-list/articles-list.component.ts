import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import {ArticleService} from "../../services/products/article/article.service";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articlesList! : Article[]
  constructor(private _articleService : ArticleService) {
    this.getArticles()
  }

  ngOnInit(): void {

  }

  getArticles(){
    this._articleService.getArticles()
      .subscribe(data => this.articlesList = data);
  }
}
