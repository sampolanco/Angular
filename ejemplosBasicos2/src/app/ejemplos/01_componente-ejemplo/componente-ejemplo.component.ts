import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-ejemplo',
  templateUrl: './componente-ejemplo.component.html'
})
export class ComponenteEjemploComponent implements OnInit {
  atributoString:String="";
  atributoNumber:number=0;
  
  constructor() { }

  ngOnInit(): void {
    this.atributoString="ValorAtributo";
    this.atributoNumber=10;
  }

  get atributoMayusculas():String{
    return this.atributoString.toUpperCase();
  }

  obtenerAtributosConcatenados():String{
    return this.atributoString+this.atributoNumber.toString();
    //return ${this.atributoString} + ${this.atributoNumber}';
  }

  procesoBoton(){
    this.atributoString="ValorModificado";
    this.atributoNumber++;
  }
}
