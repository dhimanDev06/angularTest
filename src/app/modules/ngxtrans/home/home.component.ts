import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
   }
   switchLanguage(language: string) {
    this.translateService.use(language);
  }

  ngOnInit(): void {
  }

}
