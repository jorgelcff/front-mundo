import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  ObterEscolas() {
    return this.http.get("assets/dados/escolas.json");
  }

}
