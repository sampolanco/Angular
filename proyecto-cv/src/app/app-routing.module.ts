import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatosPersonalesComponent} from './components/datos-personales/datos-personales.component';
import {EducacionComponent} from './components/educacion/educacion.component';
import {ExperienciaComponent} from './components/experiencia/experiencia.component';
import {ProyectoTesisComponent} from './components/proyecto-tesis/proyecto-tesis.component';
import {ConocimientosComponent} from './components/conocimientos/conocimientos.component';
import {MiscelaneosComponent} from './components/miscelaneos/miscelaneos.component';
import {MiscelaneoHijoComponent} from './components/miscelaneos/childs/miscelaneo-hijo.component';
import {TarjetaComponent} from './components/tarjeta/tarjeta.component';

const routes: Routes = [
  { path: 'datosPersonalesRoute', component: DatosPersonalesComponent },
  { path: 'educacionRoute', component: EducacionComponent },
  { path: 'experienciaRoute', component: ExperienciaComponent },
  { path: 'proyectoTesisRoute', component: ProyectoTesisComponent },
  { path: 'conocimientosRoute', component: ConocimientosComponent },
  { path: 'miscelaneosRoute', component: MiscelaneosComponent },
  {
    path: 'miscelaneosRoute/:id', component: MiscelaneosComponent,
    children:[
      { path:'child', component: MiscelaneoHijoComponent}
    ]
  },
  { path: 'tarjetaRoute/:id', component: TarjetaComponent },
  { path: '', pathMatch:'full',redirectTo: 'datosPersonalesRoute' },
  { path: '**', pathMatch:'full',redirectTo: 'datosPersonalesRoute' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
