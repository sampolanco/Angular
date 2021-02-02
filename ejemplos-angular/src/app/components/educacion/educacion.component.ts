import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  tarjetaElements:{institucion:string,titulo:string,periodo:string,descripciones:string[]}[]=
    [
      {
        institucion:'UPIITA (Instituto Politécnico Nacional)',
        titulo:'Ingeniería Telemática',
        periodo:"2012 - 2017",
        descripciones:[
          "Adquirí conocimientos de desarrollo de software y redes de computadoras, así como conocimientos especializados en el campo de las telecomunicaciones",
        ]
      },
      {
        institucion:'Centro de Bachillerato Tecnológico Industrial y de Servicios',
        titulo:'Técnico en Informática',
        periodo:"2009 - 2012",
        descripciones:[
          "Adquirí conocimientos técnicos en el área de informática y programas de diseño",
        ]
      },
      {
        institucion:'Oracle',
        titulo:'Oracle Certified Associate, Java SE 8 Programmer',
        periodo:"2020",
        descripciones:[
          "Certifica los básicos de desarrollador Java",
        ]
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
