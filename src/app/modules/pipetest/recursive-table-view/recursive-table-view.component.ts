import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive-table-view',
  templateUrl: './recursive-table-view.component.html',
  styleUrls: ['./recursive-table-view.component.css']
})
export class RecursiveTableViewComponent implements OnInit {

  @Input() data:any;
  @Input() level:any; 
  constructor() { }

  ngOnInit(): void {
  }

}
