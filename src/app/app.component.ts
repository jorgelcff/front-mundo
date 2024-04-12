import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router ){}

  ngOnInit() {
    this.ExibirNavBar();
  }

  ExibirNavBar(){
    if(this.router.url != "/inscricao" && this.router.url != "/inscricaoProfessor"){
      return false;
    }else{
      return true;
    }
  }

}
