import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { HomeComponent } from './home/home.component';
import { HostClassDirective } from './host-class.directive';
import { HostDirectiveDirective } from './host-directive.directive';


@NgModule({
  declarations: [
    HomeComponent,
    HostClassDirective,
    HostDirectiveDirective
  ],
  imports: [
    CommonModule,
    DirectiveRoutingModule
  ]
})
export class DirectiveModule { }
