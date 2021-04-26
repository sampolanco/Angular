import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  proyectos:{nombre:string,ruta:string}[]=
    [
      {nombre:'SRPU',ruta:'ruta1'},
      {nombre:'SISTEMA DETECTOR DE LA ANTRACNOSIS DEL MANGO POR PROCESAMIENTO DIGITAL DE IMÁGENES',ruta:'ruta2'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
