import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';


@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html'
})
export class ComponenteHijoComponent implements OnInit {

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
    console.log(this.personas.length);
  }
}

