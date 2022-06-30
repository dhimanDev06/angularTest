import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandpaComponent } from './grandpa/grandpa.component';

const routes: Routes = [
  {path:'',component:GrandpaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRoutingModule { }
