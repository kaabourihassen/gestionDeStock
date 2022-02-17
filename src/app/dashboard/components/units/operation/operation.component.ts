import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../models/Article";
import {Operation} from "../../../models/Operation";
import {OperationService} from "../../../services/operation/operation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Input() operation! : Operation
  @Input() index! : number
  constructor(private _operationService:OperationService, private _router: Router) { }

  ngOnInit(): void {
  }

  deleteOperation(operationId: Number) {
    this._operationService.deleteOperation(operationId);
    this._router.navigate(['operationsList'])
  }
  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
