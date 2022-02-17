import {Component, Input, OnInit} from '@angular/core';
import {Magazin} from "../../models/Magazin";
import {MagazinService} from "../../services/magazin/magazin.service";

@Component({
  selector: 'app-magazins-list',
  templateUrl: './magazins-list.component.html',
  styleUrls: ['./magazins-list.component.scss']
})
export class MagazinsListComponent implements OnInit {
  @Input() magazinsList! : Magazin[]
  constructor(private _magazinService : MagazinService) {
    this.getMagazins()
  }

  ngOnInit(): void {

  }
  getMagazins(){
    this._magazinService.getMagazins()
      .subscribe(data => this.magazinsList = data);
  }

}
