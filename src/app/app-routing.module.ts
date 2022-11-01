import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { CineastasComponent } from './pages/cineastas/cineastas.component';
const routes: Routes = [
  {path:'', component:PeliculasComponent},
  {path:'peliculas', loadChildren:()=>import ('./pages/peliculas/peliculas.module').then(x=>x.PeliculasModule)},
  {path:'series', component:SeriesComponent},
  {path:'cineastas', component:CineastasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
