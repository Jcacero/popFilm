import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { CineastasComponent } from './pages/cineastas/cineastas.component';
import { InfoMultimediaComponent } from './pages/info-multimedia/info-multimedia.component';
const routes: Routes = [
  {path:'',component:PeliculasComponent},
  {path:'peliculas', component:PeliculasComponent,},
  {path:'info-multimedia/:id', component:InfoMultimediaComponent,},
  {path:'series', component:SeriesComponent},
  {path:'cineastas', component:CineastasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
