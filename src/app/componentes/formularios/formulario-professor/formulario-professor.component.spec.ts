/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioProfessor } from './formulario-professor.component';

describe('InscricaoFormulario3Component', () => {
  let component: FormularioProfessor;
  let fixture: ComponentFixture<FormularioProfessor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioProfessor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProfessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
