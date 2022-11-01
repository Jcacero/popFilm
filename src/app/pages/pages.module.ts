import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CineastasComponent } from './cineastas/cineastas.component';
import { LoginComponent } from '../components/login/login.component';



@NgModule({
  declarations: [
    HomeComponent, 
    PeliculasComponent, 
    SeriesComponent, 
    NoticiasComponent, 
    CineastasComponent,
    LoginComponent
  ],
  exports:[
    HomeComponent,
    ComponentsModule,
    PrimengModule,
    PeliculasComponent, 
    SeriesComponent, 
    NoticiasComponent, 
    CineastasComponent,
    LoginComponent
  
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PagesModule { }
