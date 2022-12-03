import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos de prime ng
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    ChipModule
  ],
  exports:[
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    AutoCompleteModule,
    FormsModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    ChipModule
  ]
})
export class PrimengModule { }
