import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'table',component:TableComponent
  },

  {
    path:'recursive',component:TableViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipetestRoutingModule { }
