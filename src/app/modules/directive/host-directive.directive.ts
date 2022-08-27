import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostDirective]'
})
export class HostDirectiveDirective {
  @HostBinding('value') txt:any = 'Basic';
  constructor() { }

  @HostListener('mouseenter') addtxt() {
    this.txt = "Enter the Text";
  }

  @HostListener('mouseleave') rmvtxt() {
    this.txt = "Remove the Text";
  }

}
