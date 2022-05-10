import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { MapRoutingModule } from './map-routing.module';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    SwitchmapComponent,
    ConcatmapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule
  ],
  providers:[
    ApiService
  ]
})
export class MaptestModule { }
