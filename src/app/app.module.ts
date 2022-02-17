import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { ArticleComponent } from './dashboard/components/units/article/article.component';
import { MaterielComponent } from './dashboard/components/units/materiel/materiel.component';
import { MaterielsListComponent } from './dashboard/containers/materiels-list/materiels-list.component';
import { ArticlesListComponent } from './dashboard/containers/articles-list/articles-list.component';
import { UserComponent } from './dashboard/components/units/user/user.component';
import { LoginComponent } from './dashboard/components/auth+register/login/login.component';
import { RegisterComponent } from './dashboard/components/auth+register/register/register.component';
import { UsersListComponent } from './dashboard/containers/users-list/users-list.component';
import { MagazinComponent } from './dashboard/components/units/magazin/magazin.component';
import { MagazinsListComponent } from './dashboard/containers/magazins-list/magazins-list.component';
import { CategoryComponent } from './dashboard/components/units/category/category.component';
import { CategoriesListComponent } from './dashboard/containers/categories-list/categories-list.component';
import { CategoryFormComponent } from './dashboard/components/forms/createForms/category-form/category-form.component';
import { UserFormComponent } from './dashboard/components/forms/createForms/user-form/user-form.component';
import { MaterielFormComponent } from './dashboard/components/forms/createForms/materiel-form/materiel-form.component';
import { ArticleFormComponent } from './dashboard/components/forms/createForms/article-form/article-form.component';
import { MagazinFormComponent } from './dashboard/components/forms/createForms/magazin-form/magazin-form.component';
import { UpdateUserComponent } from './dashboard/components/forms/updateForms/update-user/update-user.component';
import { UpdateCategoryComponent } from './dashboard/components/forms/updateForms/update-category/update-category.component';
import { UpdateMagazinComponent } from './dashboard/components/forms/updateForms/update-magazin/update-magazin.component';
import { UpdateMaterielComponent } from './dashboard/components/forms/updateForms/update-materiel/update-materiel.component';
import { UpdateArticleComponent } from './dashboard/components/forms/updateForms/update-article/update-article.component';
import { OperationComponent } from './dashboard/components/units/operation/operation.component';
import { OperationArticleFormComponent } from './dashboard/components/forms/createForms/operation/operation-article-form/operation-article-form.component';
import {AuthGuard} from "./dashboard/authTests/guard/auth/auth.guard";
import {TokenInterceptorInterceptor} from "./dashboard/authTests/token-interceptor/token-interceptor.interceptor";
import { MainDashboardComponent } from './dashboard/containers/main-dashboard/main-dashboard.component';
import { AdminDashboardComponent } from './dashboard/containers/admin-dashboard/admin-dashboard.component';
import { AdminUsersListComponent } from './dashboard/components/units/adminDashboard/admin-users-list/admin-users-list.component';
import { AdminRespMatListComponent } from './dashboard/components/units/adminDashboard/admin-resp-mat-list/admin-resp-mat-list.component';
import { AdminRespArtListComponent } from './dashboard/components/units/adminDashboard/admin-resp-art-list/admin-resp-art-list.component';
import { AdminAdminListComponent } from './dashboard/components/units/adminDashboard/admin-admin-list/admin-admin-list.component';
import { AdminUnitComponent } from './dashboard/components/units/adminDashboard/admin-unit/admin-unit.component';
import { OperationsMaterielListComponent } from './dashboard/containers/operations-materiel-list/operations-materiel-list.component';
import { OperationsArticleListComponent } from './dashboard/containers/operations-article-list/operations-article-list.component';
import { MaterielFormRComponent } from './dashboard/components/forms/createForms/operation/materielForms/materiel-form-r/materiel-form-r.component';
import { MaterielFormVComponent } from './dashboard/components/forms/createForms/operation/materielForms/materiel-form-v/materiel-form-v.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent,
    MaterielComponent,
    UserComponent,
    MaterielsListComponent,
    ArticlesListComponent,
    UsersListComponent,
    LoginComponent,
    RegisterComponent,
    MagazinComponent,
    MagazinsListComponent,
    CategoryComponent,
    CategoriesListComponent,
    CategoryFormComponent,
    UserFormComponent,
    MaterielFormComponent,
    ArticleFormComponent,
    MagazinFormComponent,
    UpdateUserComponent,
    UpdateCategoryComponent,
    UpdateMagazinComponent,
    UpdateMaterielComponent,
    UpdateArticleComponent,
    OperationComponent,
    OperationArticleFormComponent,
    MainDashboardComponent,
    AdminDashboardComponent,
    AdminUsersListComponent,
    AdminRespMatListComponent,
    AdminRespArtListComponent,
    AdminAdminListComponent,
    AdminUnitComponent,
    OperationsMaterielListComponent,
    OperationsArticleListComponent,
    MaterielFormRComponent,
    MaterielFormVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
