import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule

  ],
  exports:[
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule
  ]
})
export class PrimengModule { }
