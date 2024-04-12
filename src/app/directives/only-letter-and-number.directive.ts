import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetterAndNumber]'
})
export class OnlyLetterAndNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {

    const input = event.target as HTMLInputElement;
    const regex = /^[\p{L}\d\s]{0,19}[\p{L}\d]$/u;

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^\p{L}\d\s]/gu, '');
    }
  }

}
