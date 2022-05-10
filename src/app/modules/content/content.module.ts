import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { PageComponent } from './page/page.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [
    HomeComponent,
    HelloComponent,
    PageComponent,
    ChildComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
