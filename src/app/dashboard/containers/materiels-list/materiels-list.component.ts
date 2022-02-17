import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from '../../models/Materiel';
import {MaterielService} from "../../services/products/materiel/materiel.service";

@Component({
  selector: 'app-materiels-list',
  templateUrl: './materiels-list.component.html',
  styleUrls: ['./materiels-list.component.scss']
})
export class MaterielsListComponent implements OnInit {
@Input() materielsList : Materiel[] | null = []
  constructor(private _materielService : MaterielService) {
    this.getMateriel()
  }

  ngOnInit(): void {

  }

  getMateriel(){
    this._materielService.getMateriels()
      .subscribe(data => this.materielsList = data);
  }
}
