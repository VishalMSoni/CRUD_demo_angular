import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomMobileNumber]'
})
export class CustomMobileNumberDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseleave') onMouseLeave() {
    let value = this.el.nativeElement.value;
    let newValue;

    if (value.length == 10) {
      newValue = '+91-' + value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 10);
      this.el.nativeElement.value = newValue;
    } else if (value.length == 16) {
      if (value[0] == '+' && value[1] == '9' && value[2] == '1' && value[3] == '-' && value[7] == '-' && value[12] == '-') {
        this.el.nativeElement.value = value;
      } else {
        window.alert("write proper number");
      }
    } else {
      window.alert("write proper number");
    }
  }
}
