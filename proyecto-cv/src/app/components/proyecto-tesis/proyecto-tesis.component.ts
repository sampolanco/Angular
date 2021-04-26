import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-tesis',
  templateUrl: './proyecto-tesis.component.html',
  styleUrls: ['./proyecto-tesis.component.css']
})
export class ProyectoTesisComponent implements OnInit {
  mostrar:boolean=true;
  nombreProyecto:string='Sistema detector de plagas por medio de procesamiento digital de imágenes';
  descripcionProyecto="Proyecto de titulación: “Sistema detector de plagas por medio de procesamiento digital de imágenes” en el cual se realizó el levantamiento de requerimientos, diagramas de clases, casos de uso, actividades, secuencia, elaboración de algoritmos y programas de visión artificial. Así como la implementación de un sistema de escritorio y web, el cual esta publicado mediante un servidor de Openshift. Entre las tecnologias usadas se encuentra C++, JavaScript, C#, Node.Js, PostGIS, HTML, JSON, Rest, Bootstrap, Jade. ";
  urlDescarga:string="https://1drv.ms/u/s!AnsvPfqUhBjAaJWSRUpyHvrcj-I?e=6Gq7bl";

  constructor() { }

  ngOnInit(): void {
  }

}
