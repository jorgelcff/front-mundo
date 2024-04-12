import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http: HttpClient) { }

  ObterEndereco(cep:string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    });
  }

}
