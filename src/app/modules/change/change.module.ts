import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { GrandpaComponent } from './grandpa/grandpa.component';
import { ParentsComponent } from './parents/parents.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GrandpaComponent,
    ParentsComponent,
    ChildComponent,
  
  ],
  imports: [
    CommonModule,
    ChangeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChangeModule { }
