import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxtransRoutingModule } from './ngxtrans-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxtransRoutingModule, 
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateHttpLoaderFactory,
          deps: [HttpClient]
        }
      })
  ]
})
export class NgxtransModule { }
