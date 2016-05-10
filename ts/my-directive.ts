import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})

export class MyDirective {

  // Directive Example Constructor
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#FF0000';
  }
}
