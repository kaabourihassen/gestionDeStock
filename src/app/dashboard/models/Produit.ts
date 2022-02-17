import {Magazin} from "./Magazin";
import {Category} from "./Category";

export interface Produit{
  code? : Number;
  type_Produit? : String;
  intitule? : String;
  matricule? : String;
  magazin? : Magazin;
  category? : Category;
}
