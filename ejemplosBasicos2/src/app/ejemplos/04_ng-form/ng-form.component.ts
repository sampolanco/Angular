import { Component, OnInit } from '@angular/core';
// Se tiene que agregar el modulo FormsModule
import { Persona } from '../../interfaces/Persona';


@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html'
})
export class NgFormComponent implements OnInit {
  personas:Persona[]=[];
  persona:Persona={
    nombre:"",
    edad:0
  };

  constructor() { }

  ngOnInit(): void {
  }

  metodoNgSubmit(){
    if(this.persona.nombre.trim().length==0){return;}
    this.personas.push(this.persona);
    this.persona={
      nombre:"",
      edad:0
    };
    console.log(this.personas.length);
  }
}
