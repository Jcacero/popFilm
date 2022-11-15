import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { CineastasComponent } from './pages/cineastas/cineastas.component';

import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'',component:PeliculasComponent},
  {path:'peliculas', component:PeliculasComponent },
  {path:'series', component:SeriesComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'cineastas', component:CineastasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
