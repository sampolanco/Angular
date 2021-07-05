import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/secciones/busqueda/busqueda.component';

const rutas:Routes=[
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'busqueda/:categoria',
        component:BusquedaComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rutas)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}