import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etapas } from 'src/app/enums/etapas.enum';
import { ResultadoCandidato } from 'src/app/models/resultado-candidato';
import { Token } from 'src/app/models/token';
import { TokenService } from 'src/app/services/token.service';
import { UtilsService } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  @Input() dados: ResultadoCandidato;

  carregando: boolean = false

  form = this.fb.group({
    motivo: ['', Validators.required]
  });

  constructor(
    private utilsService: UtilsService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenService,) { }

  ngOnInit() {
  }

  IsMobile() {
    return this.utilsService.IsMobile();
  }

  ExibirTextoAProvado(){
    return this.dados.status === '1' ? true : false;
  }

  ExibirFaculdade() {
    return this.dados.status === '1' ? true : false;
  }

  ExibirNota() {
    return this.dados.comprovante_nota != null ? true : false;
  }

  ExibirFicha19() {
    return this.dados.declaracao_ensino_medio != null ? true : false;
  }

  ExibirFicha18() {
    return this.dados.declaracao_ensino_fundamental != null ? true : false;
  }

  ExibirResidencia() {
    return this.dados.comprovante_residencia != null ? true : false;
  }

  ExibirResidenciaEspecial() {
    return this.dados.comprovante_residencia_especial != null ? true : false;
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

  ExibirRecurso() {
    // return environment.etapa === Etapas.recurso;
    return false;
  }

  SalvarTokenLogin() {
    this.tokenService.ObterTokenLogin().subscribe({
      next: ((response) => {
        localStorage.setItem("TokenLogin", JSON.stringify(response));
      })
    });
  }

  // Cancelar() {
  //   this.candidatoService.SalvarDadosCandidato(null);
  // }

  ExibirCarregando(){
    return this.carregando ? "Carregando" : "Enviar Recurso" ;
  }

  VerificarCarregando(){
    return this.carregando ? true : false ;
  }

  // EnviarRecurso() {
  //   this.carregando = true;
  //   let token = this.ObterToken();
  //   if (token) {
  //     this.candidatoService.EnviarRecurso(token!, parseInt(this.dados.id_candidato!), this.form.controls.motivo.value!).subscribe({
  //       next: ((success: any) => {
  //         Swal.fire({
  //           title: `${success.Message}`,
  //           html: `<div>Protocolo: <span class="user-select-all fw-bold">${success.protocolo}</span></div>`,
  //           icon: 'success',
  //           confirmButtonColor: "#1C4496",
  //           confirmButtonText: 'OK',
  //           allowOutsideClick: false,
  //           allowEscapeKey: false
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             this.Cancelar();
  //             this.router.navigate(['']);
  //             window.scrollTo(0, 0);
  //           }
  //         })
  //       }),
  //       error: (error:any) => {
  //         switch (error.status) {
  //           case 403:
  //             if (error.error.error === 'Token inválido!') {
  //               this.SalvarTokenLogin();
  //               this.toastr.error("Não foi possível enviar recurso no momento tente novamente!", "AVISO", this.IsMobile() ? {
  //                 positionClass: 'toast-bottom-right'
  //               } : {});
  //             } else {
  //               this.toastr.error(error.error.error, "AVISO", this.IsMobile() ? {
  //                 positionClass: 'toast-bottom-right'
  //               } : {});
  //             }
  //             this.carregando = false;
  //             break;

  //             case 500:
  //               if (error.error.error === 'Candidato Inválido!') {
  //                 this.toastr.error("Candidato Inválido!", "AVISO", this.IsMobile() ? {
  //                   positionClass: 'toast-bottom-right'
  //                 } : {});
  //               } else {
  //                 this.toastr.error(error.error.error, "AVISO", this.IsMobile() ? {
  //                   positionClass: 'toast-bottom-right'
  //                 } : {});
  //               }
  //               this.carregando = false;
  //               break;

  //           default:
  //             this.toastr.error("Não foi possível enviar recurso no momento", "AVISO", this.IsMobile() ? {
  //               positionClass: 'toast-bottom-right'
  //             } : {});
  //             this.carregando = false;
  //             break;
  //         }
  //       }
  //     });
  //   }

  // }



}
