/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioAluno } from './formulario-aluno.component';

describe('InscricaoFormulario2Component', () => {
  let component: FormularioAluno;
  let fixture: ComponentFixture<FormularioAluno>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAluno ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAluno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
