import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  ObterToken() {
    return this.http.get(environment.api + "/obter-token", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  ObterTokenLogin() {
    return this.http.post(environment.api + "/login", {
      "user": environment.loginUser,
      "pass": environment.loginPass,
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
