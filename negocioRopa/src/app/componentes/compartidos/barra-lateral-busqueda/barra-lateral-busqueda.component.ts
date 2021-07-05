import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../servicios/categorias/categorias.service';
import { Etiqueta } from '../../../interfaces/etiqueta.interface';

@Component({
  selector: 'app-barra-lateral-busqueda',
  templateUrl: './barra-lateral-busqueda.component.html',
  styleUrls: ['./barra-lateral-busqueda.component.css']
})
export class BarraLateralBusquedaComponent implements OnInit {
  filtros:string[]=[];
  constructor(private categoriaService:CategoriaService) { }


  ngOnInit(): void {
  }

  get etiqueta():Etiqueta{
    return this.categoriaService.etiquetas;
  }
  clicElementoCheck(e:any){
    let filtrar:boolean=e.target.checked;
    let valorFiltro:string=e.target.id;
    if(filtrar){
      this.filtros.push(valorFiltro);
    }
    else{
      this.eliminarElementoFiltros(valorFiltro);
    }
  }
  clicBotonFiltro(valorFiltro:string){
    this.eliminarElementoFiltros(valorFiltro);
    var filtroElemento = <HTMLInputElement>document.getElementById(valorFiltro);
    filtroElemento.checked=false;
  }

  private eliminarElementoFiltros(valorFiltro:string){
    this.filtros.forEach((element,index)=>{
      if(element==valorFiltro) this.filtros.splice(index,1);
   });
  }
}
