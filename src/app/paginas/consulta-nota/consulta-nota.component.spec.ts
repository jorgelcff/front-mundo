import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaNotaComponent } from './consulta-nota.component';

describe('ConsultaNotaComponent', () => {
  let component: ConsultaNotaComponent;
  let fixture: ComponentFixture<ConsultaNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaNotaComponent]
    });
    fixture = TestBed.createComponent(ConsultaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
