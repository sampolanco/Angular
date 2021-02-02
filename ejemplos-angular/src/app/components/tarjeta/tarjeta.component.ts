import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConocimientoService } from '../../service/conocimiento.service';
import { ConocimientoModelInterface } from '../../model/conocimiento.model';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  conocimiento:ConocimientoModelInterface;

  constructor(private activatedRoute :ActivatedRoute,
              private conocimientoService: ConocimientoService) {
    this.activatedRoute.params.subscribe(
      params=>{
        console.log('Se buscó el id: '+params['id']);
        this.conocimiento=conocimientoService.getConocimientoById(params['id']);
      }
    );
  }

  ngOnInit(): void {
  }

}
