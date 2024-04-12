import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  ObterToken(): string | null {
    let token = localStorage.getItem('TokenLogin');
    if (token) {
      let teste: Token = JSON.parse(token);
      return teste.Token!;
    } else {
      return null;
    }
  }

  RemoverNumero(event: KeyboardEvent) {
    let caracteresPermitidos: Array<string> = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '{', '}', '[', ']', 'ª', 'º', '°', '?', '!', '*', ',', '.', ':', ';',
      '"', "'", '#', '$', '%', '¨', '&', '(', ')', '_', '-', '+', '=', '§', '|', '<', '>', '/'
    ];
    if (caracteresPermitidos.includes(event.key)) {
      return event.preventDefault();
    }

  }

  RemoverLetra(event: any, max: number) {
    if (event.target.value || event.target.value != '' || event.target.value != undefined) {
      if (Number(event.target.value) >= max) {
        return event.preventDefault();
      }
    }

    if (Number(event.charCode) < 48 && Number(event.charCode) != 44 || Number(event.charCode) > 57 && Number(event.charCode) != 44) {
      return event.preventDefault();
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

  ArquivoSuportado(arquivo: File) {
    if (
      arquivo.type === "application/pdf"
    ) {
      return true;
    } else {
      return false;
    }
  }

  ConverterParaBase64(arquivo: File) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.readAsDataURL(arquivo);
      reader.onloadend = () => {
        return resolve(reader.result);
      };
    });
  }

  ValidarCpf(value: string) {

    if(!value){
      return false;
    }
    let cpf = value;
    // if (control.value === "marcelo") {
    //   return null;
    // } else {
    //   return { cpf: true };
    // }

    let cpfStudent = cpf.split('');
    let cpfStudentWithVerifidDigit: any = [];
    let weight = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let weight2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum: number = 0;
    let verifiedDigit: any = [];


    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    } else {
      for (let index = 0; index < weight.length; index++) {
        sum += Number.parseInt(cpfStudent[index]) * weight[index];
        cpfStudentWithVerifidDigit.push(Number.parseInt(cpfStudent[index]));
      }

      verifiedDigit.push(sum % 11 == 10 ? 0 : sum % 11);

      sum = 0;

      cpfStudentWithVerifidDigit.push(verifiedDigit[0]);

      for (let index = 0; index < weight2.length; index++) {
        sum += cpfStudentWithVerifidDigit[index] * weight2[index];
      }

      verifiedDigit.push(sum % 11 == 10 ? 0 : sum % 11);

      if (Number.parseInt(cpfStudent[9]) === verifiedDigit[0] && Number.parseInt(cpfStudent[10]) === verifiedDigit[1]) {
        return true;
      } else {
        return false;
      }
    }
  }

}
