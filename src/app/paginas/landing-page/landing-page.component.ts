import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  editaisEstudante = [
    {
      ano: "2023",
      ingles: "https://educ.rec.br/recifenomundo/assets/pdfs/Edital nº 08 2023 CURSO Estudante.pdf",
      intercambio: "",
      anexos:"",
      erratas: ""
    },
    {
      ano: "2024",
      ingles: "",
      intercambio: "https://educ.rec.br/recifenomundo/assets/pdfs/Edital Seleção Estudantes da Rede Municipal do Recife - Intercâmbio.pdf",
      anexos:"https://educ.rec.br/recifenomundo/assets/pdfs/ANEXOS edital seleção intercambio ESTUDANTE.pdf",
      erratas: "https://educ.rec.br/recifenomundo/assets/pdfs/SEI_PR - 2411781 - Publicação.pdf"
    },
  ];

  resultadosEstudante = [
    {
      ano: "2023",
      ingles: "https://educ.rec.br/recifenomundo/assets/pdfs/CURSO ESTUDANTE_1ª edição.pdf",
      intercambio: "",
      anexos: "",
    },
    {
      ano: "2024",
      ingles: "",
      intercambio: "",
      anexos: "",
    },
  ];

  editaisProfessor = [
    {
      ano: "2023",
      ingles: "https://educ.rec.br/recifenomundo/assets/pdfs/Edital nº 09 2023 CURSO Professor.pdf",
      intercambio: "",
      anexos: "",
      erratas: ""
    },
    {
      ano: "2024",
      ingles: "",
      intercambio: "https://educ.rec.br/recifenomundo/assets/pdfs/Edital Seleção Professores da Rede Municipal do Recife - Intercâmbio.pdf",
      anexos: "https://educ.rec.br/recifenomundo/assets/pdfs/ANEXOS edital seleção intercambio PROFESSOR.pdf",
      erratas: "https://educ.rec.br/recifenomundo/assets/pdfs/SEI_PR - 2399382 - Edital Seduc.pdf"
    },
  ];

  resultadosProfessor = [
    {
      ano: "2023",
      ingles: "https://educ.rec.br/recifenomundo/assets/pdfs/CURSO PROFESSOR_1ª edição.pdf",
      intercambio: "",
      anexos: "",
      erratas: ""
    },
    {
      ano: "2024",
      ingles: "",
      intercambio: "",
      anexos: "",
      erratas: ""
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  IrParaInscricao() {
    this.router.navigate(['inscricao']);
  }

  BaixarPDF(url: string) {
    if (url !== "" && url !== undefined) {
      const pdfEstudante1 = url;
      const linkEstudante1 = document.createElement("a")

      linkEstudante1.target = '_blank';

      linkEstudante1.href = pdfEstudante1;
      linkEstudante1.click();
      linkEstudante1.remove();
    } else {
      Swal.fire("Documento não disponível!");
    }
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
