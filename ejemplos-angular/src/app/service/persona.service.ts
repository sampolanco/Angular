import { Injectable } from '@angular/core';
import { PersonaModel,PersonaModelInterface } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaDatos:PersonaModelInterface =new PersonaModel().getPersona();

  constructor() {
    console.log("servicio PersonaService");
  }

  getPersona():PersonaModelInterface{
    return this.personaDatos;
  }
}
