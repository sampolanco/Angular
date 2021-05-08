import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../interfaces/Persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html'
})
export class ListadoPersonasComponent implements OnInit {
  @Input() personas:Persona[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
