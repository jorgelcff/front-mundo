import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { Etapas } from "src/app/enums/etapas.enum";

@Component({
  selector: "app-fase",
  templateUrl: "./fase.component.html",
  styleUrls: ["./fase.component.css"],
})
export class FaseComponent {
  faseAtual = 2;
  constructor(private router: Router) {}

  ngOnInit() {}
  // FaseAtual(fase: number) {
  //   if (fase === environment.etapa) {
  //     return 'fase-atual';
  //   } else {
  //     return '';
  //   }
  // }
  ObterEtapa() {
    return environment.etapa;
  }

  ExibirParte1Mobile() {
    if (this.IsMobile()) {
      return environment.etapa <= Etapas.resultadoPreliminar ? true : false;
    } else {
      return true;
    }
  }

  ExibirParte2Mobile() {
    if (this.IsMobile()) {
      return environment.etapa > Etapas.resultadoPreliminar ? true : false;
    } else {
      return true;
    }
  }

  IrParaInscricaoEstudante() {
    this.router.navigate(["inscricao"]);
  }

  IrParaInscricaoProfessor() {
    this.router.navigate(["inscricaoProfessor"]);
  }

  irParaConsultarEstudante() {
    this.router.navigate(["consultarEstudante"]);
  }

  irParaConsultarProfessor() {
    this.router.navigate(["consultarProfessor"]);
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
