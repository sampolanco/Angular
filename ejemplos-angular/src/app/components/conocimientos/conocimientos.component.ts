import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConocimientoService } from '../../service/conocimiento.service';
import { ConocimientoModelInterface } from '../../model/conocimiento.model';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {
  conocimientoDatos:ConocimientoModelInterface[]=[];

  constructor(private conocimientoService : ConocimientoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.conocimientoDatos=this.conocimientoService.getAllConocimientos();
  }

  /*verTarjeta(id:Number){
    this.router.navigate(['/tarjetaRoute',id]);
  }*/

  buscar(condicion:string){
    console.log('Buscando conocimientos: ' +condicion);
    this.conocimientoDatos=this.conocimientoService.getConocimientosByCondicion(condicion);
  }

}
