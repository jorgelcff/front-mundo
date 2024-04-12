import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscricaoProfessorComponent } from './inscricao-professor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { FormularioProfessor } from 'src/app/componentes/formularios/formulario-professor/formulario-professor.component';
import { CardInformativoModule } from 'src/app/componentes/card-informativo/card-informativo.module';
import { RodapeModule } from 'src/app/componentes/rodape/rodape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CardInformativoModule,
    RodapeModule,
  ],
  declarations: [InscricaoProfessorComponent, FormularioProfessor],
  exports: [InscricaoProfessorComponent, FormsModule]
})
export class InscricaoProfessorModule { }
