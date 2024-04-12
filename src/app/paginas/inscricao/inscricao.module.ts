import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { InscricaoComponent } from './inscricao.component';
import { FormularioAluno } from 'src/app/componentes/formularios/formulario-aluno/formulario-aluno.component';
import { CardInformativoModule } from 'src/app/componentes/card-informativo/card-informativo.module';
import { RodapeModule } from 'src/app/componentes/rodape/rodape.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { OnlyLetterDirective } from 'src/app/directives/only-letter.directive';
import { OnlyLetterAndNumberDirective } from 'src/app/directives/only-letter-and-number.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    CardInformativoModule,
    RodapeModule,
    NgSelectModule,

  ],
  declarations: [
    InscricaoComponent,
    FormularioAluno,
    OnlyLetterDirective,
    OnlyLetterAndNumberDirective
  ],
  exports:[InscricaoComponent, FormsModule]
})
export class InscricaoModule { }
