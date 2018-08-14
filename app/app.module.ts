import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildComp1Component } from './child-comp1/child-comp1.component';
import { ChildComp2Component } from './child-comp2/child-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentCompComponent,
    ChildComp1Component,
    ChildComp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
