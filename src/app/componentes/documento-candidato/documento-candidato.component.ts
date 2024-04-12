import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento-candidato',
  templateUrl: './documento-candidato.component.html',
  styleUrls: ['./documento-candidato.component.css']
})
export class DocumentoCandidatoComponent implements OnInit {
  @Input() tipoDocumento:string;
  @Input() nomeDocumento:string;
  @Input() status:string;
  constructor() { }

  ngOnInit() {
  }

  CorStatus(){
    if (this.status === '0') {
      return 'border-danger bg-danger'
    } else if(this.status === '1'){
      return 'border-success bg-success';
    } else{
      return 'border-white bg-white';
    }
  }

}
