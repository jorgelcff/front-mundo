import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-candidato',
  templateUrl: './status-candidato.component.html',
  styleUrls: ['./status-candidato.component.css']
})
export class StatusCandidatoComponent implements OnInit {

  @Input() status:string;

  constructor() { }

  ngOnInit() {
  }

}
