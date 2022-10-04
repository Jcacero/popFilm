import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { PersonasComponent } from './personas/personas.component';
import { NoticiasComponent } from './noticias/noticias.component';




@NgModule({
  declarations: [HomeComponent, PeliculasComponent, SeriesComponent, PersonasComponent, NoticiasComponent ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
