import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor(private utilsService: UtilsService,) {}

  ngOnInit() {

  }

  IsMobile() {
    return this.utilsService.IsMobile();
  }



}
