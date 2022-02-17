import {Component, Input, OnInit} from '@angular/core';
import {Materiel} from "../../../../models/Materiel";
import {MaterielService} from "../../../../services/products/materiel/materiel.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MagazinService} from "../../../../services/magazin/magazin.service";
import {CategoryService} from "../../../../services/category/category.service";
import {Magazin} from "../../../../models/Magazin";
import {Category} from "../../../../models/Category";

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.scss']
})
export class UpdateMaterielComponent implements OnInit {
  materielId! : Number
  materiel! : Materiel
  magazinsList! : Magazin[]
  categoriesList! : Category[]
  constructor(private _materielService : MaterielService,private route:ActivatedRoute,
              private _magazinService : MagazinService, private _categoryService : CategoryService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getOneMateriel()
    this.getMagazinSAndCategories()
  }
  form = new FormGroup({
    type_Produit : new FormControl(""),
    intitule : new FormControl("",Validators.required),
    matricule : new FormControl("",Validators.required),
    magazinId : new FormControl("",Validators.required),
    categoryId : new FormControl("",Validators.required)
  })
  updateMateriel() {
    const materiel= {
      type_Produit : "Materiel",
      intitule : this.form.get("intitule")?.value,
      matricule : this.form.get("matricule")?.value,
      magazin : {
        magazinId : this.form.get("magazinId")?.value
      },
      category : {
        categoryId : this.form.get("categoryId")?.value
      }
    }
    this._materielService.updateMateriel(this.materielId,materiel).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    })
    this._router.navigate(['materielsList'])
  }
  async getOneMateriel() {
    this.materielId = Number(this.route.snapshot.paramMap.get('materielId'))
    this.materiel = await this._materielService.getMateriel(this.materielId).toPromise()
    this.form.setValue({
      type_Produit : "Materiel",
      intitule : this.materiel.intitule,
      matricule : this.materiel.matricule,
      magazinId : this.materiel.magazin?.magazinId,
      categoryId : this.materiel.category?.categoryId
    })
  }
  getMagazinSAndCategories(){
    this._magazinService.getMagazins().subscribe(data => this.magazinsList = data);
    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }
}
