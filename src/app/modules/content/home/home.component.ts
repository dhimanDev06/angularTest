import { Component, OnInit, Input, VERSION } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = `Hi ${VERSION.major}`;
  visible = true;
  constructor() { }

  arrylst:any = [
    {val:'Dhiman'},
    {val:'Suman'}
  ];
  ngOnInit(): void {
  }

}
