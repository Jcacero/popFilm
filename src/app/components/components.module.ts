import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

//componentes
import { CarouselComponent } from './crousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarouselComponent,
    
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CarouselComponent,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
