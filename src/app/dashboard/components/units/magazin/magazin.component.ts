import {Component, Input, OnInit} from '@angular/core';
import { Magazin } from '../../../models/Magazin';
import {MagazinService} from "../../../services/magazin/magazin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-magazin',
  templateUrl: './magazin.component.html',
  styleUrls: ['./magazin.component.scss']
})
export class MagazinComponent implements OnInit {
  @Input() magazin! : Magazin
  constructor(private _magazinService : MagazinService, private _router: Router) { }

  ngOnInit(): void {
  }

  deletMagazin(magazinId : Number){
    this._magazinService.deleteMagazin(magazinId);
    this._router.navigate(['magazinsList'])
  }
  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
