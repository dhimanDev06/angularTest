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
  },
  {
    path: 'change',
    loadChildren: () => import('./modules/change/change.module').then(m => m.ChangeModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./modules/storeprac/storeprac.module').then(m => m.StorepracModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'transloco',
    loadChildren: ()=> import('./modules/transloco/transloco.module').then(m =>m.myTranslocoModule)
  },
  {
    path: 'ngxtrans',
    loadChildren: ()=> import('./modules/ngxtrans/ngxtrans.module').then(m =>m.NgxtransModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
