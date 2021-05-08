import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html'
})
export class NgIfComponent implements OnInit {
  isMostrarDivPrimario:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  ocultarMostrarDivPrimario(){
    this.isMostrarDivPrimario=!this.isMostrarDivPrimario;
  }
}
