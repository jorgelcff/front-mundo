import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  constructor(private sanitizerService: DomSanitizer) { }
  transform(value: any, args?: any): any {
    let cpf = value.replace(/[^\d]/g, "");
    let cpfMascara = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    let cpfSplit = cpfMascara.split('.');
    cpfSplit[1] = '***';
    let novoCpfSplit =  cpfSplit[2].split('-');
    novoCpfSplit[0] = '***';
    return `${cpfSplit[0]}.${cpfSplit[1]}.${novoCpfSplit[0] }-${novoCpfSplit[1]}`;
  }

}
