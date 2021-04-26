import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConocimientoModelInterface } from '../../model/conocimiento.model';

@Component({
  selector: 'app-tarjeta-resumen',
  templateUrl: './tarjeta-resumen.component.html',
  styleUrls: ['./tarjeta-resumen.component.css']
})
export class TarjetaResumenComponent implements OnInit {
  @Input()
  conocimiento:ConocimientoModelInterface;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verTarjeta(){
    this.router.navigate(['/tarjetaRoute',this.conocimiento.id]);
  }

}
