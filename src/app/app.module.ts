import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DirectiveComponent } from './directive/directive.component';
import { SalesComponent } from './sales/sales.component';
import { HomeWork1Component } from './home-work1/home-work1.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    DirectiveComponent,
    SalesComponent,
    HomeWork1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
