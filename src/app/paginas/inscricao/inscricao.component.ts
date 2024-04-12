import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { ToastrService } from 'ngx-toastr';
import { FormularioService } from 'src/app/services/formulario.service';
import { Aluno } from 'src/app/models/aluno';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  form = this.fb.group({
    matricula: ['', [
      Validators.required,
      Validators.minLength(1),
    ],
    ],
  });

  matriculaValid = false;
  carregando = false;

  constructor(
    private formularioService: FormularioService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
  }

  ExibirFormulario() {
    return this.formularioService.ObterDadosAluno();
  }

  ValidarMatricula() {
    if (this.form.controls.matricula.invalid) {
      this.matriculaValid = true;
    } else {
      this.matriculaValid = false;
    }
  }

  ObterToken() {
    return this.utilsService.ObterToken();
  }

  AvisoDeErro(titulo: string, mensagem: string) {
    this.toastr.error(mensagem, titulo, this.IsMobile() ? {
      positionClass: 'toast-bottom-right'
    } : {});
  }

  BuscarMatricula() {
    this.matriculaValid = false;
    this.carregando = true;
    if (this.form.valid) {
      let token = this.ObterToken();
      if (token != null) {
        this.formularioService.BuscarMatricula(this.form.controls.matricula.value!, token).subscribe({
          next: ((response) => {
            this.form.controls.matricula.setValue("");
            this.form.updateValueAndValidity();
            this.formularioService.SalvarDadosAluno(response as Aluno);
            this.carregando = false;
          }),
          error:(error) => {
            this.AvisoDeErro("AVISO",error.error.error);
            this.carregando = false;
          }
        });


      }

    } else {
      this.ValidarMatricula();
      this.toastr.error("Favor verificar o campo matricula", "AVISO", this.IsMobile() ? {
        positionClass: 'toast-bottom-right'
      } : {});
      this.carregando = false;
    }

  }

  ExibirLoading() {
    return this.carregando ? 'fa-solid fa-spinner is-animating' : ''
  }

  ExibirRodape() {
    return !this.ExibirFormulario() ? 'fixed-bottom' : '';
  }

  RemoverNumero(event: KeyboardEvent) {
    return this.utilsService.RemoverNumero(event);
  }

  Removerletra(event: KeyboardEvent, max = 2023) {
    return this.utilsService.RemoverLetra(event, max);
  }

  IsMobile() {
    return this.utilsService.IsMobile();
  }


}
