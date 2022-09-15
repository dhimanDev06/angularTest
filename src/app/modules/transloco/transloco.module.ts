import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoRoutingModule } from './transloco-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';

import { TrashttpservicesService } from './trashttpservices.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    TranslocoModule,
    TranslocoRoutingModule
  ],
  providers: [

  ]
})
export class myTranslocoModule { }
