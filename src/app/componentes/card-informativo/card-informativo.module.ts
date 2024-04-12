import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformativoComponent } from './card-informativo.component';



@NgModule({
  declarations: [CardInformativoComponent],
  imports: [
    CommonModule
  ],exports:[CardInformativoComponent]
})
export class CardInformativoModule { }
