import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { PrimengModule } from './primeng/primeng.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    PrimengModule,
    BrowserAnimationsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
