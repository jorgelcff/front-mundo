import { Component } from '@angular/core';
import { Etapas } from 'src/app/enums/etapas.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent {
  constructor() { }

    ngOnInit() {
    }

    ExibirBotaoInscricao(){
      if (this.ObterEtapa() === 0) {
        return true;
      }else{
        return false;
      }
    }

    ExibirBotaoResultado(){
      if (this.ObterEtapa() === Etapas.resultadoFinal || this.ObterEtapa() === Etapas.remajenamento) {
        return true;
      }else{
        return false;
      }
    }

    ObterEtapa() {
      return environment.etapa;
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
}



