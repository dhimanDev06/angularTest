import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recursive-table-view',
  templateUrl: './recursive-table-view.component.html',
  styleUrls: ['./recursive-table-view.component.css']
})
export class RecursiveTableViewComponent implements OnInit, OnChanges {

  @Input() data:any;
  @Input() level:any; 
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.data && this.data.children && this.data.children.length > 0 ){
      this.data['show'] = false;
    }
  }

  ngOnInit(): void {
  }

  check(d:any){
    console.log('check',d, d.show);
    if(d.show == true){
      d.show = false
    }else{
      d.show = true
    }
    
  }

}
