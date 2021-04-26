export interface PersonaModelInterface{
  id: number;
  nombre:string;
  fechaNacimiento:Date;
  estado:string;
  ciudad:string;
  colonia:string;
  cp?:string;
  telefono?:string;
  correo?:string;
  rutaImagen?: string;
  titulo: string;
  descripcion: string;
}

export class PersonaModel {
  getPersona=function():PersonaModelInterface
  {
    return this.persona;
  };

  private persona:PersonaModelInterface= {
    id: 1,
    nombre:'Jesus Samuel Polanco Rodriguez',
    fechaNacimiento:new Date("1994-07-01"),
    estado:'Ciudad de Mexico',
    ciudad:'Gustavo A Madero',
    colonia:'ejemplo',
    telefono:'55-00000000',
    correo:'ejemplo@outlook.es',
    rutaImagen: 'assets/img/datos-personales/persona.jpg',
    titulo: 'Ingeniero en Telemática',
    descripcion:'Desarrollador de software con experiencia en el análisis, desarrollo y mantenimiento '+
    'de aplicaciones empresariales en un entorno de Java. Manejo de variedad de herramientas de Frontend '+
    'y Backend. Y amplia experiencia en el manejo de bases de datos'
  }
}
