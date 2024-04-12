import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { FaqComponent } from 'src/app/componentes/faq/faq.component';
import { RodapeComponent } from 'src/app/componentes/rodape/rodape.component';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
import { FaseComponent } from 'src/app/componentes/fase/fase.component';
import { EditalComponent } from 'src/app/componentes/edital/edital.component';
import { EntendaMaisComponent } from 'src/app/componentes/entenda-mais/entenda-mais.component';
import { RodapeModule } from 'src/app/componentes/rodape/rodape.module';
import { VagasComponent } from 'src/app/componentes/vagas/vagas.component';
import { LandingNavbarComponent } from 'src/app/componentes/landing-navbar/landing-navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    RodapeModule,
    NgbDropdownModule
  ],
  declarations: [
    LandingPageComponent,
    FaqComponent,
    InicioComponent,
    FaseComponent,
    EditalComponent,
    EntendaMaisComponent,
    VagasComponent,
    LandingNavbarComponent
  ],
  exports:[LandingPageComponent]
})
export class LandingPageModule { }
