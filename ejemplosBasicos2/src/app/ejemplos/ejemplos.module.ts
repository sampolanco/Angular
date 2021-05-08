import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponenteEjemploComponent } from './01_componente-ejemplo/componente-ejemplo.component';
import { NgForComponent } from './02_ng-for/ng-for.component';
import { NgIfComponent } from './03_ng-if/ng-if.component';
import { NgFormComponent } from './04_ng-form/ng-form.component';
import { ComponenteHijoComponent } from './05_componente-hijo/componente-hijo.component';
import { ListadoPersonasComponent } from './05_componente-hijo/listado-personas/listado-personas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PersonaService } from './servicios/persona.service';

@NgModule({
    declarations:[
        ComponenteEjemploComponent,
        NgForComponent,
        NgIfComponent,
        NgFormComponent,
        ComponenteHijoComponent,
        ListadoPersonasComponent,
        ServiciosComponent
    ],
    exports: [
        ComponenteEjemploComponent,
        NgForComponent,
        NgIfComponent,
        NgFormComponent,
        ComponenteHijoComponent,
        ServiciosComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        PersonaService
    ]
})
export class EjemplosModule{};