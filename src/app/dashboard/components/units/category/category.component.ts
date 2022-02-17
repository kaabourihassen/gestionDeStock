import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../models/Category";
import {CategoryService} from "../../../services/category/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category! : Category
  constructor(private _categoryService : CategoryService, private _router: Router) { }

  ngOnInit(): void {
  }
  deleteCategory(categoryId : Number){
    console.log(categoryId);
    this._categoryService.deleteCategory(categoryId);
    this._router.navigate(['categoriesList'])
  }

  isAdmin() {
    if (localStorage.getItem("role")=="ADMIN"){
      return false
    }
    return true
  }
}
