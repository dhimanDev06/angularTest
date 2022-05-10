import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/maptest/maptest.module').then(m => m.MaptestModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./modules/pipetest/pipetest.module').then(m => m.PipetestModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'directive',
    loadChildren: () => import('./modules/directive/directive.module').then(m => m.DirectiveModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
