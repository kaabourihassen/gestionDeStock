import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/components/auth+register/login/login.component';
import { RegisterComponent } from './dashboard/components/auth+register/register/register.component';
import { ArticlesListComponent } from "./dashboard/containers/articles-list/articles-list.component";
import { MaterielsListComponent } from "./dashboard/containers/materiels-list/materiels-list.component";
import { UsersListComponent } from './dashboard/containers/users-list/users-list.component';
import { MagazinsListComponent } from "./dashboard/containers/magazins-list/magazins-list.component";
import { CategoriesListComponent } from "./dashboard/containers/categories-list/categories-list.component";
import { ArticleFormComponent } from "./dashboard/components/forms/createForms/article-form/article-form.component";
import { UpdateArticleComponent } from "./dashboard/components/forms/updateForms/update-article/update-article.component";
import { MaterielFormComponent } from "./dashboard/components/forms/createForms/materiel-form/materiel-form.component";
import { MagazinFormComponent } from "./dashboard/components/forms/createForms/magazin-form/magazin-form.component";
import { CategoryFormComponent } from "./dashboard/components/forms/createForms/category-form/category-form.component";
import { UserFormComponent } from "./dashboard/components/forms/createForms/user-form/user-form.component";
import {
  UpdateCategoryComponent
} from "./dashboard/components/forms/updateForms/update-category/update-category.component";
import { UpdateMagazinComponent } from "./dashboard/components/forms/updateForms/update-magazin/update-magazin.component";
import {
  UpdateMaterielComponent
} from "./dashboard/components/forms/updateForms/update-materiel/update-materiel.component";
import { UpdateUserComponent } from "./dashboard/components/forms/updateForms/update-user/update-user.component";
import {
  OperationArticleFormComponent
} from "./dashboard/components/forms/createForms/operation/operation-article-form/operation-article-form.component";
import { AuthGuard } from "./dashboard/authTests/guard/auth/auth.guard";
import { HasRoleGuard } from "./dashboard/authTests/guard/hasRole/has-role.guard";
import {MainDashboardComponent} from "./dashboard/containers/main-dashboard/main-dashboard.component";
import {AdminDashboardComponent} from "./dashboard/containers/admin-dashboard/admin-dashboard.component";
import {
  AdminUsersListComponent
} from "./dashboard/components/units/adminDashboard/admin-users-list/admin-users-list.component";
import {
  AdminRespArtListComponent
} from "./dashboard/components/units/adminDashboard/admin-resp-art-list/admin-resp-art-list.component";
import {
  AdminRespMatListComponent
} from "./dashboard/components/units/adminDashboard/admin-resp-mat-list/admin-resp-mat-list.component";
import {
  AdminAdminListComponent
} from "./dashboard/components/units/adminDashboard/admin-admin-list/admin-admin-list.component";
import {
  OperationsMaterielListComponent
} from "./dashboard/containers/operations-materiel-list/operations-materiel-list.component";
import {
  OperationsArticleListComponent
} from "./dashboard/containers/operations-article-list/operations-article-list.component";
import {
  MaterielFormVComponent
} from "./dashboard/components/forms/createForms/operation/materielForms/materiel-form-v/materiel-form-v.component";
import {
  MaterielFormRComponent
} from "./dashboard/components/forms/createForms/operation/materielForms/materiel-form-r/materiel-form-r.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component : MainDashboardComponent,
    children : [
      {
        path: 'magazinsList', component: MagazinsListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'categoriesList', component: CategoriesListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'articleForm', component: ArticleFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'ADMIN'] }
      },
      {
        path: 'materielForm', component: MaterielFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'magazinForm', component: MagazinFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'categoryForm', component: CategoryFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'userForm', component: UserFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'updateArticle/:articleId', component: UpdateArticleComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'ADMIN'] }
      },
      {
        path: 'updateCategory/:categoryId', component: UpdateCategoryComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'updateMagazin/:magazinId', component: UpdateMagazinComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'updateMateriel/:materielId', component: UpdateMaterielComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'updateUser/:userId', component: UpdateUserComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'operationArticleForm', component: OperationArticleFormComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'ADMIN'] }
      },
      {
        path: 'operationMaterielVForm', component: MaterielFormVComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'operationMaterielRForm', component: MaterielFormRComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'operationsMaterielsList', component: OperationsMaterielListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'operationsArticlesList', component: OperationsArticleListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'ADMIN'] }
      },
      {
        path: 'articlesList', component: ArticlesListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'ADMIN'] }
      },
      {
        path: 'materielsList', component: MaterielsListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'usersList', component: UsersListComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['RESP_ART', 'RESP_MAT', 'ADMIN'] }
      },
      {
        path: 'adminDashboard', component: AdminDashboardComponent,
        canActivate: [AuthGuard, HasRoleGuard], data: { role: ['ADMIN'] },
        children : [
          {
            path: 'adminUsersList', component: AdminUsersListComponent,
            canActivate: [AuthGuard, HasRoleGuard], data: { role: ['ADMIN'] }
          },
          {
            path: 'adminRESPARTsList', component: AdminRespArtListComponent,
            canActivate: [AuthGuard, HasRoleGuard], data: { role: ['ADMIN'] }
          },
          {
            path: 'adminRESPMATsList', component: AdminRespMatListComponent,
            canActivate: [AuthGuard, HasRoleGuard], data: { role: ['ADMIN'] }
          },
          {
            path: 'adminAdminList', component: AdminAdminListComponent,
            canActivate: [AuthGuard, HasRoleGuard], data: { role: ['ADMIN'] }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
