import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirigir a 'home' por defecto
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }, // Redirigir a 'home' para rutas desconocidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
