import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements  OnInit,
OnChanges,
AfterViewInit,
AfterContentInit,
OnDestroy,
DoCheck {
  @ViewChild('host') el: ElementRef<HTMLDivElement> | any;
  @ContentChild(PageComponent) panel: PageComponent | any;
  @Input() name: any;
  constructor() {
    console.log('constructor', this.name);
    // undefined
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy', this.name, this.el, this.panel);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.name, this.el, this.panel);
    // Angular 12, undefined
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.name, this.el, this.panel?.value);
    // Angular 12, undefined
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.name, this.el, this.panel?.value);
    // Angular 12, undefined
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.name, this.el);
    // Angular 12, ElementRef
  }

}
