import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  exibirIngles = false;
  exibirIntercambio = false;
  constructor() { }

  ngOnInit() {
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
