import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipetestRoutingModule } from './pipetest-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PipetestRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommonService
  ]
})
export class PipetestModule { }
