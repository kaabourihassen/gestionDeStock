import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../../models/Article";
import {Magazin} from "../../../../models/Magazin";
import {Category} from "../../../../models/Category";
import {ArticleService} from "../../../../services/products/article/article.service";
import {MagazinService} from "../../../../services/magazin/magazin.service";
import {CategoryService} from "../../../../services/category/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {async} from "rxjs";
import {data} from "autoprefixer";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  article! : Article
  articleId! : Number
  magazinsList! : Magazin[]
  categoriesList! : Category[]
  constructor(private _articleService : ArticleService,private _magazinService : MagazinService,
              private _categoryService : CategoryService,private route: ActivatedRoute, private _router: Router) {}

   ngOnInit(): void {
    this.getOneArt()

    this.getMagazinSAndCategories()
  }


  form = new FormGroup({
    intitule : new FormControl("",Validators.required),
    matricule : new FormControl("",Validators.required),
    qte : new FormControl("",Validators.required),
    qteMin : new FormControl("",Validators.required),
    magazinId : new FormControl("",Validators.required),
    categoryId : new FormControl("",Validators.required)

  })

  updateArticle(){

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
    this._articleService.updateArticle(this.articleId,article).subscribe(res => {
      console.log("done")
    }, err => {
      console.log(err.message)
    });
    this._router.navigate(['articlesList'])
  }

  async getOneArt() {
    this.articleId = Number(this.route.snapshot.paramMap.get('articleId'))
    this.article = await this._articleService.getArticle(this.articleId).toPromise()
    this.form.setValue({
      intitule : this.article.intitule!,
      matricule : this.article.matricule!,
      qte : this.article.qte!,
      qteMin : this.article.qteMin!,
      magazinId : this.article.magazin?.magazinId!,
      categoryId : this.article.category?.categoryId!
    })
  }

  getMagazinSAndCategories(){
    this._magazinService.getMagazins().subscribe(data => this.magazinsList = data);
    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }
}
