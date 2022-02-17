import {Component, Input, OnInit} from '@angular/core';
import {Magazin} from "../../../../models/Magazin";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MagazinService} from "../../../../services/magazin/magazin.service";

@Component({
  selector: 'app-update-magazin',
  templateUrl: './update-magazin.component.html',
  styleUrls: ['./update-magazin.component.scss']
})
export class UpdateMagazinComponent implements OnInit {
  magazinId! : Number
  magazin! : Magazin
  constructor(private _magazinService : MagazinService,private route:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getOneMagazin()
  }
  form = new FormGroup({
    nomMagazin : new FormControl("",Validators.required)
  })

  updateMagazin() {
    const magazin= {
      nomMagazin : this.form.get("nomMagazin")?.value
    }
    this._magazinService.updateMagazin(this.magazinId,magazin).subscribe(data => this.magazin = data);
    this._router.navigate(['magazinsList'])
  }
  async getOneMagazin() {
    this.magazinId = Number(this.route.snapshot.paramMap.get('magazinId'))
    this.magazin = await this._magazinService.getMagazin(this.magazinId).toPromise()
    this.form.setValue({
      nomMagazin : this.magazin.nomMagazin
    })
  }
}
