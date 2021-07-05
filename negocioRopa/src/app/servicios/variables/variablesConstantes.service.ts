import { Injectable } from "@angular/core";

@Injectable()
export class VariablesConstantes{
    private _nombreNegocio="Naomi";

    constructor(){}

    get nombreNegocio():string{
        return this._nombreNegocio;
    }

}