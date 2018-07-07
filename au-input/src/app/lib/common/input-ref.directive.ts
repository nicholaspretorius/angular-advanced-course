import { Directive, HostListener } from '@angular/core';

@Directive({
  //selector: '[auInputRef]'
  selector: 'au-fa-input input'
})
export class InputRefDirective {

  // constructor() { }
  focus: boolean = false;

  // Host listener is able to grab native events such as focus/blur etc
  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
