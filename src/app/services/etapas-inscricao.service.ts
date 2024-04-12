import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtapasInscricaoService {

  private etapaAtual = 0;

  constructor() { }

  Resetar() {
    this.etapaAtual = 0;
  }

  EtapaAtual(){
    return this.etapaAtual;
  }

  EtapaAnterior(){
    if (this.etapaAtual > 0) {
      this.etapaAtual--;
    }
  }

  ProximaEtapa(){
    if (this.etapaAtual < 2) {
      this.etapaAtual++;
    }
  }

}
