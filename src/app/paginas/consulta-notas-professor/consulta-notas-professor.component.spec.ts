import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaNotasProfessorComponent } from './consulta-notas-professor.component';

describe('ConsultaNotasProfessorComponent', () => {
  let component: ConsultaNotasProfessorComponent;
  let fixture: ComponentFixture<ConsultaNotasProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaNotasProfessorComponent]
    });
    fixture = TestBed.createComponent(ConsultaNotasProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
