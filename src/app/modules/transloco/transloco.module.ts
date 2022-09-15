import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoRoutingModule } from './transloco-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  TranslocoModule
} from '@ngneat/transloco';

import { TrashttpservicesService } from './trashttpservices.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TranslocoModule,
    TranslocoRoutingModule
  ],
  providers: [
  ]
})
export class myTranslocoModule { }
