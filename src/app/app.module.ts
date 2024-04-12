import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NavbarModule } from './componentes/navbar/navbar.module';
import { LandingPageModule } from './paginas/landing-page/landing-page.module';
import { InscricaoModule } from './paginas/inscricao/inscricao.module';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscricaoProfessorModule } from './paginas/inscricao-professor/inscricao-professor.module';
import { CardInformativoModule } from './componentes/card-informativo/card-informativo.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaNotaComponent } from './paginas/consulta-nota/consulta-nota.component';
import { ConsultaNotasProfessorComponent } from './paginas/consulta-notas-professor/consulta-notas-professor.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsultaNotaComponent,
    ConsultaNotasProfessorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule,
    LandingPageModule,
    InscricaoModule,
    InscricaoProfessorModule,
    CardInformativoModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RodapeModule,
    NgbModule,
  ],
  providers: [provideNgxMask(),provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
