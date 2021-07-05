import { Component, OnInit } from '@angular/core';
import { ElementoImagen } from '../../interfaces/elementoImagen.interface';
import { AnuncioService } from '../../servicios/anuncios/anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private anuncuioService:AnuncioService) { }

  ngOnInit(): void {
  }

  get anucios():ElementoImagen[]{
    return this.anuncuioService.anuncios;
  }
}
