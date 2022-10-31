import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recursive-json',
  templateUrl: './recursive-json.component.html',
  styleUrls: ['./recursive-json.component.css']
})
export class RecursiveJsonComponent implements OnInit {

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
    if(d && d.children){
      if(d.show == true){
        d.show = false
      }else{
        d.show = true
      }
    }
    
  }
}
