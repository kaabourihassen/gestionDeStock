import { Component, OnInit } from '@angular/core';
import {Operation} from "../../models/Operation";
import {OperationService} from "../../services/operation/operation.service";

@Component({
  selector: 'app-operations-materiel-list',
  templateUrl: './operations-materiel-list.component.html',
  styleUrls: ['./operations-materiel-list.component.scss']
})
export class OperationsMaterielListComponent implements OnInit {

  operationsList! : Operation[]
  constructor(private _operationService:OperationService) {
    this.getOperations()
  }

  ngOnInit(): void {

  }
  getOperations(){
    this._operationService.getOperationsMateriels().subscribe(data => this.operationsList = data);
  }

}
