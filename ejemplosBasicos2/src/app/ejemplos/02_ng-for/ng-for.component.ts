import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html'
})
export class NgForComponent implements OnInit {
  valoresLista:String[]=[];
  constructor() { }

  ngOnInit(): void {
    this.valoresLista=["elemento1","elemento2","elemento3"];
  }

}
