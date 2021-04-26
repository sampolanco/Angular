import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { PersonaModelInterface } from '../../model/persona.model';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  personaDatos:PersonaModelInterface;

  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    this.personaDatos=this.personaService.getPersona();
  }
}
