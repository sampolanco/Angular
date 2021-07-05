export interface Etiqueta{
    idEtiqueta:number;
    idEtiquetaPadre?:number;
    descripcion:string;
    etiquetasHijo:Etiqueta[];
}