import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '.appHostClass'
})
export class HostClassDirective {

  @HostBinding('style.color') color:any = 'Yellow';
  @HostBinding('style.backgroundColor') bgColor = 'red';
  constructor() { }

  @HostListener('mouseenter') onEnter() {
    this.color = 'white';
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave') onLeave() {
    this.color = 'yellow';
    this.bgColor = 'red';
  }
}
