import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotaService } from "src/app/services/nota.service";
import { UtilsService } from "src/app/services/utils.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-consulta-nota",
  templateUrl: "./consulta-notas-professor.component.html",
  styleUrls: ["./consulta-notas-professor.component.css"],
})
export class ConsultaNotasProfessorComponent implements OnInit {
  form: FormGroup;
  notaProfessor: any; // Defina um tipo mais específico se possível
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
      this.notaService.consultarNotaProfessor(matricula, token).subscribe(
        (dados) => {
          this.notaProfessor = dados;
          this.carregando = false;
          this.exibirFormulario = false;

          // Calcule o total de acertos
          this.notaProfessor.totalAcertos = this.calcularAcertos(
            this.notaProfessor
          );
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

  IsMobile() {
    return this.utilsService.IsMobile();
  }
}
