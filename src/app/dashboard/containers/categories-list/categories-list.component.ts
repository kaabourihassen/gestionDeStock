import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryService} from "../../services/category/category.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @Input() categoriesList! : Category[]
  constructor(private _categoryService : CategoryService) {
    this.getCategories()
  }

  ngOnInit(): void {

  }

  getCategories(){
    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }
}
