import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotaService } from "src/app/services/nota.service";
import { UtilsService } from "src/app/services/utils.service";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

@Component({
  selector: "app-consulta-nota",
  templateUrl: "./consulta-nota.component.html",
  styleUrls: ["./consulta-nota.component.css"],
})
export class ConsultaNotaComponent implements OnInit {
  form: FormGroup;
  notaAluno: any; // Defina um tipo mais específico se possível
  carregando: boolean = false; // Adicionar variável de carregamento
  exibirFormulario: boolean = true; // esta propriedade vai controlar a visibilidade

  constructor(
    private fb: FormBuilder,
    private notaService: NotaService,
    private utilsService: UtilsService,
    private toastr: ToastrService // Assegure-se de que o ToastrService está injetado corretamente.
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      matricula: ["", [Validators.required, Validators.minLength(1)]],
    });
  }

  ObterToken() {
    return this.utilsService.ObterToken();
  }

  totalAcertos: number = 0;

  ExibirFormularioDeNotas() {
    this.carregando = true;
    const matricula = this.form.get("matricula")?.value;
    const token = this.ObterToken();

    if (!matricula) {
      this.toastr.error("Matrícula não informada", "Erro");
      this.carregando = false;
    } else if (matricula && token) {
      this.notaService.consultarNota(matricula, token).subscribe(
        (dados: any) => {
          // Calcule o total de acertos
          //this.notaAluno.totalAcertos = this.calcularAcertos(this.notaAluno);
          Swal.fire({
            title: "Confirme o cpf do responsável",
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#005b95",
            cancelButtonText: "Cancelar",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
              try {
                const response = this.notaService
                  .validarPerguntaSegurança(
                    2,
                    Number(dados.aluno_id),
                    dados.aluno_responsavel_cpf,
                    token
                  )
                  .subscribe(
                    (response: any) => {
                      console.log("response", response);
                      if (response.codigo == 200) {
                        this.notaAluno = dados;
                        this.carregando = false;
                        this.exibirFormulario = false;
                        Swal.fire({
                          title: response.Message,
                          icon: "success",
                          text: "Cpf Confirmado!",
                          confirmButtonColor: "#005b95",
                        });
                      }
                      return response.json();
                    },
                    (error) => {
                      this.carregando = false;
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "CPF não bate com a matrícula!",
                        confirmButtonText: "Tentar Novamente",

                        confirmButtonColor: "#005b95",
                      });
                    }
                  );
              } catch (error: any) {
                this.carregando = false;
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "CPF não bate com a matrícula!",
                  confirmButtonText: "Tentar Novamente",

                  confirmButtonColor: "#005b95",
                });
              }
            },
            allowOutsideClick: () => !Swal.isLoading(),
          });

          this.carregando = false;
        },
        (error) => {
          this.toastr.error("Erro ao consultar a nota", "Erro");
          this.carregando = false;
          this.exibirFormulario = true; // Para permitir que o usuário tente novamente
        }
      );
    } else {
      this.toastr.error("Token não disponível", "Erro");
      this.carregando = false;
    }
  }

  // Função para calcular os acertos
  calcularAcertos(dados: any): number {
    let acertos = 0;
    for (let i = 1; i <= 40; i++) {
      acertos += dados["gab_questao_" + i] == "1" ? 1 : 0;
    }
    return acertos;
  }

  ExibirLoading() {
    return this.carregando ? "fa-solid fa-spinner is-animating" : "";
  }

  ExibirRodape() {
    return this.exibirFormulario ? "fixed-bottom" : "";
  }

  RemoverNumero(event: KeyboardEvent) {
    return this.utilsService.RemoverNumero(event);
  }

  Removerletra(event: KeyboardEvent, max = 2023) {
    return this.utilsService.RemoverLetra(event, max);
  }

  downloadEstudante() {
    window.open(
      "https://educ.rec.br/recifenomundo/resultado/SELEÇÃO ESTUDANTES INTERCÂMBIO.pdf"
    );
  }
  IsMobile() {
    return this.utilsService.IsMobile();
  }
}
