import {Component, Input, OnInit} from '@angular/core';
import {Magazin} from "../../../../models/Magazin";
import {Category} from "../../../../models/Category";
import {MagazinService} from "../../../../services/magazin/magazin.service";
import {CategoryService} from "../../../../services/category/category.service";
import {MaterielService} from "../../../../services/products/materiel/materiel.service";
import {Materiel} from "../../../../models/Materiel";
import {Article} from "../../../../models/Article";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-materiel-form',
  templateUrl: './materiel-form.component.html',
  styleUrls: ['./materiel-form.component.scss']
})
export class MaterielFormComponent implements OnInit {

  magazinsList! : Magazin[]
  categoriesList! : Category[]
  constructor(private _materielService : MaterielService,private _magazinService : MagazinService,
              private _categoryService : CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this.getMagazinSAndCategories()

  }

  form = new FormGroup({
    type_Produit : new FormControl(""),
    intitule : new FormControl("",Validators.required),
    matricule : new FormControl("",Validators.required),
    magazinId : new FormControl("",Validators.required),
    categoryId : new FormControl("")
  })

  createMateriel(){
    const materiel= {
      type_Produit : "Materiel",
      intitule : this.form.get("intitule")?.value,
      matricule : this.form.get("matricule")?.value,
      dateRetour : new Date(),
      magazin : {
        magazinId : this.form.get("magazinId")?.value
      },
      category : {
        categoryId : this.form.get("categoryId")?.value
      }
    }
    this._materielService.createMateriel(materiel).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    })
    this._router.navigate(['materielsList'])
  }
  getMagazinSAndCategories(){
    this._magazinService.getMagazins().subscribe(data => this.magazinsList = data);
    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }
}
