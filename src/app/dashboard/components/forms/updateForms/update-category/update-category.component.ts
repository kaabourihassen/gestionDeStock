import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../../services/category/category.service";
import {Category} from "../../../../models/Category";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  category! : Category
  categoryId! : Number
  constructor(private _categoryService : CategoryService,private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getOneCategory()
  }

  form = new FormGroup({
    nomCateg : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)
  })
  updateCategory() {
    const category = {
      nomCateg : this.form.get("nomCateg")?.value,
      description : this.form.get("description")?.value
    }
    this._categoryService.updateCategory(this.categoryId,category).subscribe(data => this.category = data);
    this._router.navigate(['categoriesList'])
  }
  async getOneCategory() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'))
    this.category = await this._categoryService.getCategory(this.categoryId).toPromise()
    this.form.setValue({
      nomCateg : this.category.nomCateg,
      description : this.category.description
    })
  }
}
