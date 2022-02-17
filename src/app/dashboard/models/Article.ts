import {Produit} from "./Produit";

export interface Article extends Produit{
    qte? : Number;
    qteMin? : Number;
}
