import {Produit} from "./Produit";

export interface Materiel extends Produit{
    dateRetour? : Date;
}
