import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

constructor(private http:HttpClient) { }

ObterCursos(token:string) {
  return this.http.get(environment.api + "/cursos",{
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':token,
    }),
  });
}

}
