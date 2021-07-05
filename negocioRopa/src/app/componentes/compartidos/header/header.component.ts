import { Component, OnInit } from '@angular/core';
import { VariablesConstantes } from '../../../servicios/variables/variablesConstantes.service';
import { CategoriaService } from '../../../servicios/categorias/categorias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private variablesConstantes:VariablesConstantes,
    private categoriaService:CategoriaService
    ) { }

  ngOnInit(): void {
  }

  get nombreNegocio():string{
    return this.variablesConstantes.nombreNegocio;
  }
  get categorias():string[]{
    return this.categoriaService.categorias;
  }
}
