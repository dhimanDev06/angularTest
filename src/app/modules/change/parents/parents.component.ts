import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ParentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    console.log('inside parents')
  }
}
