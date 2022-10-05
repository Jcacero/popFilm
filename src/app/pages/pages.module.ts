import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { PersonasComponent } from './personas/personas.component';
import { NoticiasComponent } from './noticias/noticias.component';




@NgModule({
  declarations: [
    HomeComponent, 
    PeliculasComponent, 
    SeriesComponent, 
    PersonasComponent, 
    NoticiasComponent ],
  exports:[
    HomeComponent,
    ComponentsModule,
    PrimengModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PagesModule { }
