import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { FormularioService } from 'src/app/services/formulario.service';
import { UtilsService } from 'src/app/services/utils.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-professor',
  templateUrl: './formulario-professor.component.html',
  styleUrls: ['./formulario-professor.component.css']
})
export class FormularioProfessor implements OnInit {

  matriculaValid = false;
  nomeValid = false;
  cpfValid = false;
  enderecoValid = false;
  emailValid = false;
  celularValid = false;
  diplomaValid = false;
  planoValid = false;

  declaroInformacoesValid = false;
  declaroImagemValida = false;

  carregando = false;

  arquivoUploadDiploma: File;
  inputUploadDiploma = "";

  arquivoUploadPlano: File;
  inputUploadPlano = "";

  form = this.fb.group({
    matricula: ['', Validators.required],
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    endereco: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    celular: ['', Validators.required],
    diploma: ["", Validators.required],
    planoDeAula: ["", Validators.required],
  });

  // formCheckInformacao = this.fb.group({
  //   declaroInformacoes: [false, Validators.requiredTrue]
  // })

  formCheckImagem = this.fb.group({
    declaroImagem: [false, Validators.requiredTrue]
  })

  matriculaExiste: boolean = false;

  constructor(
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private toastr: ToastrService,
    private formularioService: FormularioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscarMatricula() {

  }

  IsMobile() {
    return this.utilsService.IsMobile();
  }

  ExibirLoading() {
    return this.carregando ? 'fa-solid fa-spinner is-animating' : ''
  }

  RemoverNumero(event: KeyboardEvent) {
    return this.utilsService.RemoverNumero(event);
  }

  RemoverLetra(event: KeyboardEvent, max: number) {
    return this.utilsService.RemoverLetra(event, max);
  }

  ValidarMatricula() {
    if (this.form.controls.matricula.invalid) {
      this.matriculaValid = true;
    } else {
      this.matriculaValid = false;
    }
  }

  ValidarNome() {
    if (this.form.controls.nome.invalid) {
      this.nomeValid = true;
    } else {
      this.nomeValid = false;
    }
  }

  ValidarCpf() {

    if (this.form.controls.cpf.invalid) {
      this.cpfValid = true;
    } else {
      if (this.utilsService.ValidarCpf(this.form.controls.cpf.value!) === false) {
        this.cpfValid = true;
      } else {
        this.cpfValid = false;
      }
    }
  }

  ValidarEndereco() {
    if (this.form.controls.endereco.invalid) {
      this.enderecoValid = true;
    } else {
      this.enderecoValid = false;
    }
  }

  ValidarEmail() {
    if (this.form.controls.email.invalid) {
      this.emailValid = true;
    } else {
      this.emailValid = false;
    }
  }

  ValidarCelular() {
    if (this.form.controls.celular.invalid) {
      this.celularValid = true;
    } else {
      this.celularValid = false;
    }
  }

  ValidarDiploma() {
    if (this.form.controls.diploma.invalid) {
      this.diplomaValid = true;
    } else {
      this.diplomaValid = false;
    }
  }

  ValidarPlano() {
    if (this.form.controls.planoDeAula.invalid) {
      this.planoValid = true;
    } else {
      this.planoValid = false;
    }
  }


  // ValidarDeclaroInformacoes() {
  //   if (this.formCheckInformacao.controls.declaroInformacoes.invalid) {
  //     this.declaroInformacoesValid = true;
  //   } else {
  //     this.declaroInformacoesValid = false;
  //   }
  // }

  ValidarDeclaroImagem() {
    if (this.formCheckImagem.controls.declaroImagem.invalid) {
      this.declaroImagemValida = true;
    } else {
      this.declaroImagemValida = false;
    }
  }

  ValidarCampos() {
    this.ValidarMatricula();
    this.ValidarNome();
    this.ValidarCpf();
    this.ValidarEndereco();
    this.ValidarEmail();
    this.ValidarCelular();
    this.ValidarDiploma();
    this.ValidarPlano();
    // this.ValidarDeclaroInformacoes();
    this.ValidarDeclaroImagem();
  }


  LimparValidacao() {
    this.matriculaValid = false;
    this.nomeValid = false;
    this.cpfValid = false;
    this.enderecoValid = false;
    this.declaroInformacoesValid = false;
    this.declaroImagemValida = false;
  }

  Removerletra(event: KeyboardEvent, max = 2023) {
    return this.utilsService.RemoverLetra(event, max);
  }

  ObterToken() {
    return this.utilsService.ObterToken();
  }

  AvisoDeErro(titulo: string, mensagem: string) {
    this.toastr.error(mensagem, titulo, this.IsMobile() ? {
      positionClass: 'toast-bottom-right'
    } : {});
  }

  ArquivoSuportado(arquivo: File) {
    return this.utilsService.ArquivoSuportado(arquivo);
  }

  TamanhoMaximoDoArquivo(arquivo: File) {
    if (arquivo.size / (1024 * 1024) > 10) {
      return false;
    } else {
      return true;
    }
  }

  async UploadDiploma(event: any) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files != null) {
      const arquivo = element.files[0];
      if (this.ArquivoSuportado(arquivo)) {
        if (this.TamanhoMaximoDoArquivo(arquivo)) {
          this.arquivoUploadDiploma = arquivo;
          this.inputUploadDiploma = this.arquivoUploadDiploma.name;
        } else {
          this.toastr.error(
            "Arquivo excedeu o tamanho máximo de 10MB!",
            "AVISO",
            this.IsMobile()
              ? {
                positionClass: "toast-bottom-right",
              }
              : {}
          );
          this.form.controls.diploma.setValue("");
          this.form.controls.diploma.updateValueAndValidity();
        }
      } else {
        this.toastr.error(
          "Formato do arquivo não é um dos seguintes arquivos suportados: pdf",
          "AVISO",
          this.IsMobile()
            ? {
              positionClass: "toast-bottom-right",
            }
            : {}
        );
        this.form.controls.diploma.setValue("");
        this.form.controls.diploma.updateValueAndValidity();
      }
    }
  }

  async UploadPlano(event: any) {
    const element = event.currentTarget as HTMLInputElement;
    if (element.files != null) {
      const arquivo = element.files[0];
      if (this.ArquivoSuportado(arquivo)) {
        if (this.TamanhoMaximoDoArquivo(arquivo)) {
          this.arquivoUploadPlano = arquivo;
          this.inputUploadPlano = this.arquivoUploadDiploma.name;
        } else {
          this.toastr.error(
            "Arquivo excedeu o tamanho máximo de 10MB!",
            "AVISO",
            this.IsMobile()
              ? {
                positionClass: "toast-bottom-right",
              }
              : {}
          );
          this.form.controls.planoDeAula.setValue("");
          this.form.controls.planoDeAula.updateValueAndValidity();
        }
      } else {
        this.toastr.error(
          "Formato do arquivo não é um dos seguintes arquivos suportados: pdf",
          "AVISO",
          this.IsMobile()
            ? {
              positionClass: "toast-bottom-right",
            }
            : {}
        );
        this.form.controls.planoDeAula.setValue("");
        this.form.controls.planoDeAula.updateValueAndValidity();
      }
    }
  }


  ConverterParaBase64(file: File) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        return resolve(reader.result);
      };
    });
  }


  async FinalizarCandidatura() {
    this.carregando = true;
    if (this.matriculaExiste) {
      this.LimparValidacao();
      this.ValidarCampos();
      let token = this.ObterToken();

      // if (this.form.valid && this.formCheckInformacao.valid && this.formCheckImagem.valid)
      if (this.form.valid && this.formCheckImagem.valid) {
        if (this.utilsService.ValidarCpf(this.form.controls.cpf.value!)) {
          if (token != null) {
            let documentos: any[] = [];

            if (this.arquivoUploadDiploma !== undefined) {
              await this.ConverterParaBase64(this.arquivoUploadDiploma).then((data) => {
                documentos.push(
                  {
                    "TIPO": "diploma-letras",
                    "arquivo": data
                  }
                  ,)
              })
            }

            if (this.arquivoUploadPlano !== undefined) {
              await this.ConverterParaBase64(this.arquivoUploadPlano).then((data) => {
                documentos.push(
                  {
                    "TIPO": "plano-aula",
                    "arquivo": data
                  }
                  ,)
              })
            }

            this.formularioService.CadastrarProfessor(
              this.form.controls.matricula.value!,
              this.form.controls.nome.value!,
              this.form.controls.cpf.value!,
              this.form.controls.email.value!,
              this.form.controls.celular.value!,
              this.form.controls.endereco.value!,
              // this.formCheckInformacao.controls.declaroInformacoes.value ? '1' : '0',
              this.formCheckImagem.controls.declaroImagem.value ? '1' : '0',
              documentos,
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
                    this.router.navigate(['']);
                  }
                });
              }),
              error: (error) => {
                this.carregando = false;
                this.AvisoDeErro("AVISO", error.error.error);
              }
            });
          }
        } else {
          this.carregando = false;
          this.AvisoDeErro("AVISO", "CPF invalido, Favor verificar o CPF informado para prosseguir!");
        }
      } else {
        this.carregando = false;
        this.ValidarCampos();
        this.AvisoDeErro("AVISO", "Favor verificar os campos obrigatórios para prosseguir!");
      }
    } else {
      this.ValidarMatricula();
      if (this.form.controls.matricula.valid) {
        let token = this.ObterToken();
        if (token != null) {
          this.formularioService.BuscarMatriculaProfessor(this.form.controls.matricula.value!, token).subscribe({
            next: ((response: any) => {
              this.matriculaExiste = true;
              this.form.controls.matricula.disable();
              this.form.controls.nome.setValue(response.NOME);
              this.form.controls.nome.disable();
              this.form.controls.cpf.setValue(response.CPF);
              this.form.controls.cpf.disable();
            }),
            error: (error) => {
              this.AvisoDeErro("AVISO", error.error.error);
            }
          });
          this.carregando = false;
        }
      } else {
        this.AvisoDeErro("AVISO", "Favor verificar o campo obrigatório para prosseguir!");
      }
      this.carregando = false;
    }
  }


}
