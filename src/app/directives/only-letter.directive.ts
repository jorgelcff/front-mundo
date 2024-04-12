import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetter]'
})
export class OnlyLetterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {

    const input = event.target as HTMLInputElement;
    const regex = /^[\p{L}\s]{0,19}[\p{L}]$/u;

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^\p{L}\s]/gu, '');
    }
  }

}
