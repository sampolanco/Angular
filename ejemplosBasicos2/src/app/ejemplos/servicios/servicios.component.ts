import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html'
})
export class ServiciosComponent implements OnInit {
 

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
  }

  get personas():Persona[]{
    return this.personaService.getAllPersonas();
  }
}
