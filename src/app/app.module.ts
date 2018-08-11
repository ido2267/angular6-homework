import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DirectiveComponent } from './directive/directive.component';
import { SalesComponent } from './sales/sales.component';
import { HomeWork1Component } from './home-work1/home-work1.component';
import { HomeWork2Component } from './home-work2/home-work2.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    DirectiveComponent,
    SalesComponent,
    HomeWork1Component,
    HomeWork2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
