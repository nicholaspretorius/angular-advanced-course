import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  //encapsulation: ViewEncapsulation.Emulated, // ViewEncapsulation.Emulate is the default - this is what enforces style isolation
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements AfterContentInit {

  @Input()
  icon: string;

  // @Input()
  // placeholder: string = "";

  @ContentChild(InputRefDirective)
  input: InputRefDirective; 

  constructor() { }

  // ngOnInit() {
  // }

  ngAfterContentInit() {
    // when grabbing this reference, it is a reference to the directive, not the actual DOM element, we still need to grab this from the directive
    //console.log('input', this.input);
    if (!this.input) {
      console.error('The au-fa-input component requires an input element within it.');
      // TODO: Add link to component documentation
    }

  }

  @HostBinding('class.input-focus') 
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {

    const cssClasses = {
      'fa': true,
    }

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
