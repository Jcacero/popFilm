import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { CineastasComponent } from './pages/cineastas/cineastas.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { MasInfoPeliculasComponent } from './pages/peliculas/mas-info-peliculas/mas-info-peliculas.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'peliculas', component:PeliculasComponent,
    children:[
      {path:'mas-info-peliculas', component:MasInfoPeliculasComponent}
    ],  
  },
  {path:'series', component:SeriesComponent},
  {path:'cineastas', component:CineastasComponent},
  {path:'noticias', component:NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
