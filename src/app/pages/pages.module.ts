import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CineastasComponent } from './cineastas/cineastas.component';
import { MasInfoPeliculasComponent } from './peliculas/mas-info-peliculas/mas-info-peliculas.component';




@NgModule({
  declarations: [
    HomeComponent, 
    PeliculasComponent, 
    SeriesComponent, 
    NoticiasComponent, 
    CineastasComponent, MasInfoPeliculasComponent ],
  exports:[
    HomeComponent,
    ComponentsModule,
    PrimengModule,
    PeliculasComponent, 
    SeriesComponent, 
    NoticiasComponent, 
    CineastasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PagesModule { }
