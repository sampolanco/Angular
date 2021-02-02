import { Injectable } from '@angular/core';
import { ConocimientoModel,ConocimientoModelInterface } from '../model/conocimiento.model';

@Injectable({
  providedIn: 'root'
})
export class ConocimientoService {
  conocimientoDatos:ConocimientoModelInterface[] =new ConocimientoModel().getConocimientoList();

  constructor() {
    console.log("servicio ConocimientoService");
  }

  getAllConocimientos():ConocimientoModelInterface[]{
    return this.conocimientoDatos;
  }
  getConocimientoById(id:number):ConocimientoModelInterface{
    let result:ConocimientoModelInterface;
    this.conocimientoDatos.forEach(
      dato=>{
        if(dato.id==id)
          result=dato;
      }
    );
    return result;
  }

  getConocimientosByCondicion(condicion:string):ConocimientoModelInterface[]{
    let result:ConocimientoModelInterface[]=[];
    condicion=condicion.toLowerCase();
    this.conocimientoDatos.forEach(
      dato=>{
        if(dato.nombre.toLowerCase().includes(condicion))
          result.push(dato);
      }
    );
    return result;
  }
}
