import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoserachComponent } from './autoserach/autoserach.component';
import { AutoserachcutomComponent } from './autoserachcutom/autoserachcutom.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent,
  },
  {
    path:'auto', component : AutoserachComponent
  },
  {
    path:'autocustom', component : AutoserachcutomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
