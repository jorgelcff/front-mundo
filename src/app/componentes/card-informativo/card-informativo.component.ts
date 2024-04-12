import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-informativo',
  templateUrl: './card-informativo.component.html',
  styleUrls: ['./card-informativo.component.css']
})
export class CardInformativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  IsMobile(){
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    }else {
      return false;
    }
  }

}
