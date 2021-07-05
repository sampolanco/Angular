import { Injectable } from "@angular/core";
import { Etiqueta } from '../../interfaces/etiqueta.interface';

@Injectable()
export class CategoriaService{
    private _categorias:string[]=["ropa","accesorios","zapatos"];
    private _etiqueta:Etiqueta={
        descripcion:"",
        etiquetasHijo:[],
        idEtiqueta:0
    };
    constructor(){
        console.log("CategoriaService");
        this.llenarEtiqueta();
    }

    get categorias():string[]{
        return this._categorias;
    }
    get etiquetas():Etiqueta{
        return this._etiqueta;
    }

    private llenarEtiqueta(){
        let etiquetasArray=[];
        let etiqueta1:Etiqueta={
            idEtiqueta:2,
            descripcion:"vestido",
            etiquetasHijo:[]
        };
        let etiqueta2:Etiqueta={
            idEtiqueta:3,
            descripcion:"camisas",
            etiquetasHijo:[]
        };
        let etiqueta1_1:Etiqueta={
            idEtiqueta:4,
            idEtiquetaPadre:1,
            descripcion:"vestido largo",
            etiquetasHijo:[]
        }
        etiqueta1_1.etiquetasHijo.push(
            {
                idEtiqueta:5,
                idEtiquetaPadre:4,
                descripcion:"vestido largo noche",
                etiquetasHijo:[]
            }        
        );
        etiqueta1_1.etiquetasHijo.push(
            {
                idEtiqueta:6,
                idEtiquetaPadre:4,
                descripcion:"vestido largo dia",
                etiquetasHijo:[]
            }        
        );
        etiqueta1.etiquetasHijo.push(
            etiqueta1_1
        );
        etiqueta1.etiquetasHijo.push(
            {
                idEtiqueta:9,
                idEtiquetaPadre:2,
                descripcion:"vestido corto",
                etiquetasHijo:[]
            }
        );
        etiqueta2.etiquetasHijo.push(
            {
                idEtiqueta:7,
                idEtiquetaPadre:3,
                descripcion:"camisa algodon",
                etiquetasHijo:[]
            }
        );
        etiqueta2.etiquetasHijo.push(
            {
                idEtiqueta:8,
                idEtiquetaPadre:3,
                descripcion:"camisa lino",
                etiquetasHijo:[]
            }
        );
        etiquetasArray.push(etiqueta1);
        etiquetasArray.push(etiqueta2);

        this._etiqueta={
            descripcion:"ropa",
            etiquetasHijo:etiquetasArray,
            idEtiqueta:1,
            idEtiquetaPadre:0
        };
    }
}