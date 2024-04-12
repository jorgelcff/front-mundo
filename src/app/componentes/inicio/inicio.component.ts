import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router, private tokenService: TokenService, private toastr: ToastrService) { }
  carregando: boolean = false;
  ngOnInit() {

  }

  ObterEtapa() {
    return environment.etapa;
  }

  ObterTextoEtapa() {

    switch (this.ObterEtapa()) {
      case 0:
        return "Participe do maior programa de formação em tecnologia da informação do Recife";
      case 1:
        return "As inscrições foram encerradas! Fiquem atentos(as) às próximas etapas e nos acompanhe!";
      case 2:
        return "O maior programa de formação em Tecnologia da Informação do Recife.";
      case 3:
        return "O maior programa de formação em Tecnologia da Informação do Recife.";
      case 4:
        return "";
      default:
        return "O maior programa de formação em Tecnologia da Informação do Recife.";
    }
  }
  SalvarTokenLogin() {
    this.tokenService.ObterTokenLogin().subscribe({
      next: ((response) => {
        localStorage.setItem("TokenLogin", JSON.stringify(response));
      })
    });
  }

  ObterToken(): string | null {
    let token = localStorage.getItem('TokenLogin');
    if (token) {
      let teste: Token = JSON.parse(token);
      return teste.Token!;
    } else {
      return null;
    }
  }
  ObterPdfRemanejados() {
  }

  IrParaInscricaoEstudante() {
    this.router.navigate(['inscricao']);
  }
  IrParaInscricaoProfessor() {
    this.router.navigate(['inscricaoProfessor']);
  }

  IrParaResultado() {
    this.router.navigate(['resultado']);
  }

  IsMobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    } else {
      return false;
    }
  }
}
