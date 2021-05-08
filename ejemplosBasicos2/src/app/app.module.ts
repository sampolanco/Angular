import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemplosModule } from './ejemplos/ejemplos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EjemplosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
