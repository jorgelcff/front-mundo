import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Etapas } from "src/app/enums/etapas.enum";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  routerActive = "";
  pathname = "";
  constructor(private router: Router) {}

  ngOnInit() {
    this.setRouterActive();
  }

  setRouterActive() {
    this.pathname = window.location.pathname;
    if (this.pathname === "/consultarEstudante") {
      this.routerActive = "estudante";
    } else if (this.pathname === "/consultarProfessor") {
      this.routerActive = "professor";
    }
  }
  ExibirBotaoInscricao() {
    if (this.ObterEtapa() === 0) {
      return true;
    } else {
      return false;
    }
  }

  ExibirBotaoResultado() {
    if (
      this.ObterEtapa() === Etapas.resultadoFinal ||
      this.ObterEtapa() === Etapas.remajenamento
    ) {
      return true;
    } else {
      return false;
    }
  }

  irParaConsultarEstudante() {
    this.router.navigate(["consultarEstudante"]);
  }

  irParaConsultarProfessor() {
    this.router.navigate(["consultarProfessor"]);
  }

  ObterEtapa() {
    return environment.etapa;
  }

  IsMobile() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
