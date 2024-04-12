import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entenda-mais',
  templateUrl: './entenda-mais.component.html',
  styleUrls: ['./entenda-mais.component.css']
})
export class EntendaMaisComponent {
    exibirIngles = false;
    exibirIntercambio = false;

    constructor(private router: Router) { }

    ngOnInit() {

    }

    IsMobile(){
      if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      }else {
        return false;
      }
    }

    ExibirConteudoIngles(){
      this.exibirIngles = true;
      this.exibirIntercambio = false;
    }

    ExibirConteudoIntercambio(){
      this.exibirIngles = false;
      this.exibirIntercambio = true;
    }
}
