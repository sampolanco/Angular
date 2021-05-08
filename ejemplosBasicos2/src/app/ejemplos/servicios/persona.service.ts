import { Injectable } from "@angular/core";
import { Persona } from '../../interfaces/Persona';

@Injectable()
export class PersonaService{

    constructor(){
        console.log("Servicio persona iniciado");
    }

    getAllPersonas():Persona[]{
        let personas:Persona[]=[];
        
        let persona1:Persona={
            nombre:"sam",
            edad:21
        };
        let persona2:Persona={
            nombre:"ale",
            edad:22
        };
        personas.push(persona1,persona2);
        
        return personas;
    }
}