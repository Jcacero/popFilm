import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports:[
    MenubarModule
  ]
})
export class PrimengModule { }
