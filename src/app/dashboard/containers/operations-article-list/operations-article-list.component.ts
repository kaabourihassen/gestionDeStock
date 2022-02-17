import { Component, OnInit } from '@angular/core';
import {Operation} from "../../models/Operation";
import {OperationService} from "../../services/operation/operation.service";

@Component({
  selector: 'app-operations-article-list',
  templateUrl: './operations-article-list.component.html',
  styleUrls: ['./operations-article-list.component.scss']
})
export class OperationsArticleListComponent implements OnInit {

  operationsList! : Operation[]
  constructor(private _operationService:OperationService) {
    this.getOperations()
  }

  ngOnInit(): void {

  }
  getOperations(){
    this._operationService.getOperationsArticles().subscribe(data => this.operationsList = data);
  }
}
