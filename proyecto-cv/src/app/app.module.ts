import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectoTesisComponent } from './components/proyecto-tesis/proyecto-tesis.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BodyComponent } from './components/body/body.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjetaResumenComponent } from './components/tarjeta-resumen/tarjeta-resumen.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { MiscelaneoHijoComponent } from './components/miscelaneos/childs/miscelaneo-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProyectoTesisComponent,
    DatosPersonalesComponent,
    EducacionComponent,
    ExperienciaComponent,
    BodyComponent,
    ConocimientosComponent,
    TarjetaComponent,
    TarjetaResumenComponent,
    PipesComponent,
    CapitalizadoPipe,
    MiscelaneosComponent,
    MiscelaneoHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
