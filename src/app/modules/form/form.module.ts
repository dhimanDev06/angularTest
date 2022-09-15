import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { RegistartionComponent } from './registartion/registartion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistartionComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
