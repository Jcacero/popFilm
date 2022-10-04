import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import {FormsModule} from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule

  ],
  exports:[
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule
  ]
})
export class PrimengModule { }
