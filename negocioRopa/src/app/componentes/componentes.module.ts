import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './compartidos/header/header.component';
import { FooterComponent } from './compartidos/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VariablesConstantes } from '../servicios/variables/variablesConstantes.service';
import { CategoriaService } from '../servicios/categorias/categorias.service';
import { AnuncioService } from '../servicios/anuncios/anuncio.service';
import { BarraLateralBusquedaComponent } from './compartidos/barra-lateral-busqueda/barra-lateral-busqueda.component';
import { BusquedaComponent } from './secciones/busqueda/busqueda.component';
import { TarjetaComponent } from './compartidos/tarjeta/tarjeta.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BarraLateralBusquedaComponent,
    BusquedaComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusquedaComponent
  ],
  providers:[
    VariablesConstantes,
    CategoriaService,
    AnuncioService
  ]
})
export class ComponentesModule { }
