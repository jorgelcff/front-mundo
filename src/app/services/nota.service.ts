import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NotaService {
  constructor(private http: HttpClient) {}

  consultarNota(matricula: string, token: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });

    return this.http.post(
      `${environment.api}/gabarito-aluno`,
      { matricula },
      { headers }
    );
  }

  consultarNotaProfessor(matricula: string, token: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });

    return this.http.post(
      `${environment.api}/gabarito-professor`,
      { matricula },
      { headers }
    );
  }

  validarPerguntaSegurança(
    tipo: number,
    id: number,
    cpf: string,
    token: string
  ) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: token,
    });

    return this.http.post(
      `${environment.api}/resposta`,
      { tipo, id, cpf },
      { headers }
    );
  }
}
