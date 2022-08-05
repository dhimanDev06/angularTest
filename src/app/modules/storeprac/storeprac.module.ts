import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorepracRoutingModule } from './storeprac-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BasicComponent } from './basic/basic.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    BasicComponent
  ],
  imports: [
    CommonModule,
    StorepracRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ]
})
export class StorepracModule { }
