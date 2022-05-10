import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ContentChildren(ChildrenComponent) components : QueryList<ChildrenComponent> | any;
  @Input() display:any;
  constructor() { }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit",this.components.toArray());
    this.components.toArray().forEach((c: any) => {
      console.log(c);
    });
  }

  ngOnInit(): void {
  }

  get grandChildren(){
    console.log("grandChildren",this.components.first)
    return this.components.toArray().map((x: { [x: string]: string; }) => x['value'].concat("->"+x['other']));
  }
}
