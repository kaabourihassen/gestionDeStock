import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/dashboard/models/Materiel';
import {MaterielService} from "../../../services/products/materiel/materiel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss']
})
export class MaterielComponent implements OnInit {
  @Input() materiel! : Materiel
  @Input() index! : number
  constructor(private _materielService : MaterielService, private _router: Router) { }

  ngOnInit(): void {

  }

  deleteMateriel(materielId : Number){
    this._materielService.deleteMateriel(materielId);
    this._router.navigate([this._router.url])
  }
  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
