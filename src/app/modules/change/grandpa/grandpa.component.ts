import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandpa',
  templateUrl: './grandpa.component.html',
  styleUrls: ['./grandpa.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GrandpaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    console.log('inside grandpa')
  }
}
