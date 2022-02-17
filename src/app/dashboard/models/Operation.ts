import { User } from "./User";
import {Produit} from "./Produit";

export interface Operation{
    operationId? : Number;
    natureOperation : String;
    qte? :Number;
    datePrise? : any;
    dateRetour? : Date;
    produit : Produit;
    user : User;
}
