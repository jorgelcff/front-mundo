import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Escola } from 'src/app/models/escola';
import { DadosService } from 'src/app/services/dados.service';
import { FormularioService } from 'src/app/services/formulario.service';
import { UtilsService } from 'src/app/services/utils.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.css']
})
export class FormularioAluno implements OnInit {


  matricula: string

  nomeValid = false;
  cpfValid = false;
  enderecoValid = false;
  escolaValid = false;
  anoValid = false;
  turmaValid = false;
  turnoValid = false;
  nomeResposavelValid = false;
  cpfResposavelValid = false;
  emailResposavelValid = false;
  celularResposavelValid = false;

  declaroInformacoesValid = false;
  declaroImagemValida = false;

  carregando = false;

  form = this.fb.group({
    MATRICULA: ['', Validators.required],
    NOME: ['', Validators.required],
    CPF: ['', ''],
    ENDERECO: ['', Validators.required],
    ESCOLA: ['', Validators.required],
    ANO: ['8', Validators.required],
    TURMA: ['', [Validators.required]],
    TURNO: ['', Validators.required],
    RESPONSAVEL: ['', Validators.required],
    RESPONSAVEL_CPF: ['', Validators.required],
    RESPONSAVEL_EMAIL: ['', [Validators.required, Validators.email]],
    RESPONSAVEL_CELULAR: ['', Validators.required],
  });

  formCheckInformacao = this.fb.group({
    declaroInformacoes: [false, Validators.requiredTrue]
  })

  formCheckImagem = this.fb.group({
    declaroImagem: [false, Validators.requiredTrue]
  })

  listaDeEscolas: Escola[];

  habilitarCpf = false;
  habilitarEndereco = false;

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private toastr: ToastrService,
    private formularioService: FormularioService,
    private dadosService: DadosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ObterDadosAluno();
    this.HabilitarCpf();
    this.HabilitarEndereco();
  }


  IsMobile() {
    return this.utilsService.IsMobile();
  }

  ObterMatricula() {
    return this.form.controls.MATRICULA.value!;
  }

  ObterNome() {
    return this.form.controls.NOME.value!;
  }

  ObterCpf() {
    return this.AdicionarPontuacaoCpf(this.RemoverPontuacaoCPF(this.form.controls.CPF.value!));
  }

  ObterEndereco() {
    return this.form.controls.ENDERECO.value!;
  }

  ObterEscola() {
    return this.form.controls.ESCOLA.value!;
  }

  ObterAno() {
    return this.form.controls.ANO.value!;
  }

  ObterTurma() {
    return this.form.controls.TURMA.value!;
  }

  ObterTurno() {
    return this.form.controls.TURNO.value!;
  }

  HabilitarCpf() {
    this.habilitarCpf = this.form.controls.CPF.value === '' ? true : false;
  }

  HabilitarEndereco() {
    this.habilitarEndereco = this.form.controls.ENDERECO.value?.trim() === '' ? true : false;
  }

  // SalvarEscola() {
  //   const nomeEscola = this.listaDeEscolas.filter((escola: Escola) => escola.codigo === this.form.controls.CODIGO_ESCOLA.value!)[0].nome;
  //   this.form.controls.ESCOLA.setValue(nomeEscola);
  //   this.form.updateValueAndValidity();
  // }

  ObterDadosAluno() {
    this.form.patchValue(this.formularioService.ObterDadosAluno()!);
  }

  ValidarNome() {
    if (this.form.controls.NOME.invalid) {
      this.nomeValid = true;
    } else {
      this.nomeValid = false;
    }
  }

  ValidarCpf() {
    if (this.form.controls.CPF.value === " " || this.form.controls.CPF.value === "" || this.form.controls.CPF.value === null) {
      this.cpfValid = false;
    } else if (this.form.controls.CPF.invalid) {
      this.cpfValid = true;
    } else {
      if (this.utilsService.ValidarCpf(this.RemoverPontuacaoCPF(this.form.controls.CPF.value!)) === false) {
        this.cpfValid = true;
      } else {
        this.cpfValid = false;
      }
    }
  }

  ValidarEndereco() {
    if (this.form.controls.ENDERECO.invalid) {
      this.enderecoValid = true;
    } else {
      this.enderecoValid = false;
    }
  }

  ValidarEscola() {
    if (this.form.controls.ESCOLA.invalid) {
      this.escolaValid = true;
    } else {
      this.escolaValid = false;
    }
  }

  ValidarAno() {
    if (this.form.controls.ANO.invalid) {
      this.anoValid = true;
    } else {
      if (this.form.controls.ANO.value! != "8") {
        this.anoValid = true;
      } else {
        this.anoValid = false;
      }
    }
  }

  ValidarTurma() {
    if (this.form.controls.TURMA.invalid) {
      this.turmaValid = true;
    } else {
      this.turmaValid = false;
    }
  }

  ValidarTurno() {
    if (this.form.controls.TURNO.invalid) {
      this.turnoValid = true;
    } else {
      this.turnoValid = false;
    }
  }

  ValidarNomeResposavel() {
    if (this.form.controls.RESPONSAVEL.invalid) {
      this.nomeResposavelValid = true;
    } else {
      this.nomeResposavelValid = false;
    }
  }

  ValidarCpfResposavel() {
    console.log(this.form.controls.RESPONSAVEL_CPF.invalid);

    if (this.form.controls.RESPONSAVEL_CPF.invalid) {
      this.cpfResposavelValid = true;
    } else {
      if (this.utilsService.ValidarCpf(this.RemoverPontuacaoCPF(this.form.controls.RESPONSAVEL_CPF.value!)) === false) {
        this.cpfResposavelValid = true;
      } else {
        this.cpfResposavelValid = false;
      }
    }
  }

  ValidarEmailResposavel() {
    if (this.form.controls.RESPONSAVEL_EMAIL.invalid) {
      this.emailResposavelValid = true;
    } else {
      this.emailResposavelValid = false;
    }
  }

  ValidarCelularResposavel() {
    if (this.form.controls.RESPONSAVEL_CELULAR.invalid) {
      this.celularResposavelValid = true;
    } else {
      this.celularResposavelValid = false;
    }
  }

  ValidarDeclaroInformacoes() {
    if (this.formCheckInformacao.controls.declaroInformacoes.invalid) {
      this.declaroInformacoesValid = true;
    } else {
      this.declaroInformacoesValid = false;
    }
  }

  ValidarDeclaroImagem() {
    if (this.formCheckImagem.controls.declaroImagem.invalid) {
      this.declaroImagemValida = true;
    } else {
      this.declaroImagemValida = false;
    }
  }

  ValidarCampos() {
    this.ValidarNome();
    this.ValidarCpf();
    this.ValidarEndereco();
    this.ValidarEscola();
    this.ValidarAno();
    this.ValidarTurma();
    this.ValidarTurno();
    this.ValidarNomeResposavel();
    this.ValidarCpfResposavel();
    this.ValidarEmailResposavel();
    this.ValidarCelularResposavel();
    this.ValidarDeclaroInformacoes();
    this.ValidarDeclaroImagem();
  }

  ChecarAnoPermitido() {
    return this.form.controls.ANO.value === "8" ? true : false;
  }

  LimparValidacao() {
    this.nomeValid = false;
    this.cpfValid = false;
    this.enderecoValid = false;
    this.escolaValid = false;
    this.anoValid = false;
    this.turmaValid = false;
    this.turnoValid = false;
    this.nomeResposavelValid = false;
    this.cpfResposavelValid = false;
    this.emailResposavelValid = false;
    this.celularResposavelValid = false;
    this.declaroInformacoesValid = false;
    this.declaroImagemValida = false;
  }

  RemoverNumero(event: KeyboardEvent) {
    return this.utilsService.RemoverNumero(event);
  }

  RemoverLetra(event: KeyboardEvent, max: number) {
    return this.utilsService.RemoverLetra(event, max);
  }

  AvisoDeErro(titulo: string, mensagem: string) {
    this.toastr.error(mensagem, titulo, this.IsMobile() ? {
      positionClass: 'toast-bottom-right'
    } : {});
  }

  ExibirLoading() {
    return this.carregando ? 'fa-solid fa-spinner is-animating' : ''
  }

  ObterToken() {
    return this.utilsService.ObterToken();
  }

  RemoverPontuacaoCPF(cpf: string) {
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('.', '');
    cpf = cpf.replace('-', '');
    return cpf;
  }

  AdicionarPontuacaoCpf(value: string) {
    let cpf = value.replace(/[^\d]/g, "");
    let cpfMascara = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    let cpfSplit = cpfMascara.split('.');
    let novoCpfSplit = cpfSplit[2].split('-');
    return `${cpfSplit[0]}.${cpfSplit[1]}.${novoCpfSplit[0]}-${novoCpfSplit[1]}`;
  }

  Cancelar() {
    this.form.reset();
    this.formularioService.Cancelar();
  }

  FinalizarCandidatura() {
    this.carregando = true;
    this.LimparValidacao();
    this.ValidarCampos();
    let token = this.ObterToken();
    if (this.form.valid && this.formCheckInformacao.valid && this.formCheckImagem.valid && this.ChecarAnoPermitido()) {

      if (!this.cpfValid && this.utilsService.ValidarCpf(this.RemoverPontuacaoCPF(this.form.controls.RESPONSAVEL_CPF.value!))) {
        if (this.form.controls.CPF.value! === this.form.controls.RESPONSAVEL_CPF.value!) {
          this.cpfValid = true;
          this.cpfResposavelValid = true;
          this.AvisoDeErro("AVISO", "CPF do aluno e do responsável não pode ser idêntico");
          this.carregando = false;
        } else {
          if (token != null) {
            this.formularioService.CadastrarAluno(
              this.form.controls.MATRICULA.value!,
              this.form.controls.NOME.value!,
              this.form.controls.CPF.value!,
              this.form.controls.ENDERECO.value!,
              // this.form.controls.CODIGO_ESCOLA.value!,
              this.form.controls.ESCOLA.value!,
              this.form.controls.ANO.value!,
              this.form.controls.TURMA.value!,
              this.form.controls.TURNO.value!,
              this.form.controls.RESPONSAVEL.value!,
              this.form.controls.RESPONSAVEL_CPF.value!,
              this.form.controls.RESPONSAVEL_EMAIL.value!,
              this.form.controls.RESPONSAVEL_CELULAR.value!,
              this.formCheckInformacao.controls.declaroInformacoes.value! ? '1' : '0',
              this.formCheckImagem.controls.declaroImagem.value! ? '1' : '0',
              token
            ).subscribe({
              next: ((response) => {
                this.carregando = false;
                Swal.fire({
                  text: "Inscrição confirmada com sucesso, aguarde pelas próximas etapas e continue atento no email",
                  icon: 'success',
                  allowEnterKey: false,
                  showCancelButton: false,
                  allowEscapeKey: false,
                  allowOutsideClick: false,
                  confirmButtonColor: '#11B163',
                  confirmButtonText: 'Voltar a tela inicial'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.formularioService.SalvarDadosAluno(null);
                    this.router.navigate(['']);
                  }
                })
              }), error: (error) => {
                this.carregando = false;
                this.AvisoDeErro("AVISO", error.error.error);
              }
            });
          }
        }

      } else {

        this.carregando = false;

        if (this.cpfValid) {
          this.AvisoDeErro("AVISO", "CPF do estudante informado é invalido, Favor verificar o campo de CPF para prosseguir. \n OBS: Campo não é mais obrigatório");
        } else {
          this.AvisoDeErro("AVISO", "CPF do responsável informado é invalido, Favor verificar o campo de CPF para prosseguir.");
        }
      }
    } else {


      this.carregando = false;
      this.ValidarCampos();
      this.AvisoDeErro("AVISO", "Favor verificar os campos obrigatórios para prosseguir");

      if (this.cpfValid) {
        this.AvisoDeErro("AVISO", "CPF do estudante informado é invalido, Favor verificar o campo de CPF para prosseguir. \n OBS: Campo não é mais obrigatório");
      }

      // else if (this.utilsService.ValidarCpf(this.RemoverPontuacaoCPF(this.form.controls.RESPONSAVEL_CPF.value!))) {
      //   this.AvisoDeErro("AVISO", "CPF do responsável informado é invalido, Favor verificar o campo de CPF para prosseguir.");
      // }
    }
  }



}
