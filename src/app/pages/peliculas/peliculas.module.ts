import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { PeliculasComponent } from './peliculas.component';


@NgModule({
  declarations: [
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PeliculasModule { }
