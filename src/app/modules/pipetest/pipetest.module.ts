import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipetestRoutingModule } from './pipetest-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PipetestRoutingModule
  ]
})
export class PipetestModule { }
