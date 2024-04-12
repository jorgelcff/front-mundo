import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edital',
  templateUrl: './edital.component.html',
  styleUrls: ['./edital.component.css']
})
export class EditalComponent {

  constructor(private router: Router) { }

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
