import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../../models/Article";
import {ArticleService} from "../../../../services/products/article/article.service";
import {data} from "autoprefixer";
import {Magazin} from "../../../../models/Magazin";
import {MagazinService} from "../../../../services/magazin/magazin.service";
import {CategoryService} from "../../../../services/category/category.service";
import {Category} from "../../../../models/Category";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() article! : any
  @Input() magazinsList! : Magazin[]
  @Input() categoriesList! : Category[]
  constructor(private _articleService : ArticleService,private _magazinService : MagazinService,
              private _categoryService : CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this.getMagazinSAndCategories()
  }

  form = new FormGroup({
    intitule : new FormControl("",Validators.required),
    matricule : new FormControl("",Validators.required),
    qte : new FormControl("",Validators.required),
    qteMin : new FormControl("",Validators.required),
    magazinId : new FormControl("",Validators.required),
    categoryId : new FormControl("")

  })

  createArticle(){
    const article = {
      type_Produit : "ArticleC",
      intitule : this.form.get("intitule")?.value,
      matricule : this.form.get("matricule")?.value,
      magazin : {
        magazinId : this.form.get("magazinId")?.value
      },
      category : {
        categoryId : this.form.get("categoryId")?.value
      },
      qte : this.form.get("qte")?.value,
      qteMin : this.form.get("qteMin")?.value
    }
    console.log(article)
    this._articleService.createArticle(article).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    })
    this._router.navigate(['articlesList'])
  }

  getMagazinSAndCategories(){
    this._magazinService.getMagazins().subscribe(data => this.magazinsList = data);
    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }

}
