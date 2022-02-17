import {Produit} from "./Produit";

export interface Magazin{
    magazinId? : Number;
    nomMagazin? : String;
    produits? : Produit[]
}
