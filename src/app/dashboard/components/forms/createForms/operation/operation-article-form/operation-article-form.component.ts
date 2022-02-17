import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../../../models/Produit";
import {User} from "../../../../../models/User";
import {OperationService} from "../../../../../services/operation/operation.service";
import {ArticleService} from "../../../../../services/products/article/article.service";
import {MaterielService} from "../../../../../services/products/materiel/materiel.service";
import {UserService} from "../../../../../services/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {data} from "autoprefixer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-operation-article-form',
  templateUrl: './operation-article-form.component.html',
  styleUrls: ['./operation-article-form.component.scss']
})
export class OperationArticleFormComponent implements OnInit {

  produitList! : Produit[]
  userList! : User[]
  constructor(private _operationService:OperationService,private _articleService:ArticleService,
              private _materielService:MaterielService,private _userService:UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getUsersAndArticles()
  }

  form = new FormGroup({
    natureOperation : new FormControl("",Validators.required),
    qte : new FormControl("",Validators.required),
    dateRetour : new FormControl("",Validators.required),
    produitId : new FormControl("",Validators.required),
    userId : new FormControl("",Validators.required)

  })

  createOperation(){
    const operation = {
      natureOperation : this.form.get("natureOperation")?.value,
      qte : this.form.get("qte")?.value,
      dateRetour : this.form.get("dateRetour")?.value,
      produit:{
        code : this.form.get("produitId")?.value,
        type_Produit : "ArticleC"
      },
      user : {
        userId :this.form.get("userId")?.value
      }
    }
    console.log(operation)
    this._operationService.createOperation(operation).subscribe()
    this._router.navigate(['operationsArticlesList'])
  }
  getUsersAndArticles(){
    this._articleService.getArticles().subscribe(data => this.produitList = data)
    this._userService.getUsers().subscribe(data => this.userList = data)
  }
}
