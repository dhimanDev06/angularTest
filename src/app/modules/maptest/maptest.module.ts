import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { MapRoutingModule } from './map-routing.module';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AutoserachComponent } from './autoserach/autoserach.component';
import { AutoserachcutomComponent } from './autoserachcutom/autoserachcutom.component';
import { FilterbycheckPipe } from './filterbycheck.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    SwitchmapComponent,
    ConcatmapComponent,
    AutoserachComponent,
    AutoserachcutomComponent,
    FilterbycheckPipe
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule
  ],
  providers:[
    ApiService
  ]
})
export class MaptestModule { }
