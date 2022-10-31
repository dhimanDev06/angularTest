import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsonComponent } from './json/json.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'xml',component:JsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
