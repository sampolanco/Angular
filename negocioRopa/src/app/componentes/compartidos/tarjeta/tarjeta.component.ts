import { Component, OnInit } from '@angular/core';
import { ElementoImagen } from '../../../interfaces/elementoImagen.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  tarjetas:ElementoImagen[]=[];
  
  constructor() { 
    this.llenarPrueba();
  }

  ngOnInit(): void {
  }

  public llenarTarjetas(tarjetas:ElementoImagen[]){
    this.tarjetas=tarjetas;
  }

  private llenarPrueba(){
    let urlhm="https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67037664_09.jpg?ts=1582792414002&imwidth=337&imdensity=1";
    for (let index = 0; index < 10; index++) {
      this.tarjetas.push(
        this.crearElementoImagen(
        urlhm,
        "Pantalon relax algodon "+index,
        "",
        "black",
        50*index,
        0)
      );       
    }
    for (let index = 0; index < 10; index++) {
      this.tarjetas.push(
        this.crearElementoImagen(
        urlhm,
        "Pantalon relax algodon "+index,
        "",
        "black",
        50*index,
        (50*index)-100)
      );       
    }
  }

  private crearElementoImagen(
    urlOrigen:string,
    textoDescripcion:string,
    urlClick:string,
    colorTextoDentroImagen:string,
    precio:number,
    precioConDescuento:number):ElementoImagen{
    let elemento:ElementoImagen={
        urlOrigen:urlOrigen,
        textoDescripcion:textoDescripcion,
        textoPrincipalDentroImagen:"",
        textoSecundarioDentroImagen:"",
        colorTextoDentroImagen:colorTextoDentroImagen,
        urlClick:urlClick,
        porcentajeX:80,
        porcentajeY:10,
        precio:precio,
        precioConDescuento:precioConDescuento
    };
    return elemento;
}
}
