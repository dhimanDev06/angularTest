import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipetestRoutingModule } from './pipetest-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './table-view/table-view.component';
import { RecursiveTableViewComponent } from './recursive-table-view/recursive-table-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    TableViewComponent,
    RecursiveTableViewComponent
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
