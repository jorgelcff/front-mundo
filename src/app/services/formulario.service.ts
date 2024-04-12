import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  private dadosAluno: Aluno | null = null;;

  ObterDadosAluno(): Aluno | null {
    return this.dadosAluno;
  }

  SalvarDadosAluno(aluno: Aluno | null) {
    this.dadosAluno = aluno;
  }

  BuscarMatricula(matricula: string, token: string) {
    return this.http.post(environment.api + "/matricula", {
      "matricula": matricula
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      }),
    });
  }

  BuscarMatriculaProfessor(matricula: string, token: string) {
    return this.http.post(environment.api + "/matriculaProfessor", {
      "matricula": matricula
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      }),
    });
  }

  CadastrarAluno(
    matricula: string,
    nome: string,
    cpf: string,
    endereco: string,
    // codigo_escola: string,
    escola: string,
    ano: string,
    turma: string,
    turno: string,
    responsavel: string,
    responsavel_cpf: string,
    responsavel_email: string,
    responsavel_celular: string,
    declaracao: string,
    declaracao_img: string,

    token: string,) {
    return this.http.post(environment.api + "/aluno", {
      "MATRICULA": matricula,
      "NOME": nome,
      "CPF": cpf,
      "ENDERECO": endereco,
      // "CODIGO_ESCOLA": codigo_escola,
      "ESCOLA": escola,
      "ANO": ano,
      "TURMA": turma,
      "TURNO": turno,
      "RESPONSAVEL": responsavel,
      "RESPONSAVEL_CPF": responsavel_cpf,
      "RESPONSAVEL_EMAIL": responsavel_email,
      "RESPONSAVEL_CELULAR": responsavel_celular,
      "DECLARACAO": declaracao,
      "DECLARACAO_IMG": declaracao_img,
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      }),
    });
  }

  CadastrarProfessor(
    matricula: string,
    nome: string,
    cpf: string,
    email: string,
    celular: string,
    endereco: string,
    // declaracao: string,
    declaracao_img: string,
    documentos: any[],
    token: string) {
    return this.http.post(environment.api + "/professor", {
      "MATRICULA": matricula,
      "NOME": nome,
      "CPF": cpf,
      "EMAIL": email,
      "CELULAR": celular,
      "ENDERECO": endereco,
      // "DECLARACAO": declaracao,
      "DECLARACAO_IMG": declaracao_img,
      "DOCUMENTOS": documentos
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      }),
    });
  }

  Cancelar() {
    this.dadosAluno = null;
  }


}
