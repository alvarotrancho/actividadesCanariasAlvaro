import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // <-- Add this line.
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
