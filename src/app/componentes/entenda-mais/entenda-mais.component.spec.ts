import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntendaMaisComponent } from './entenda-mais.component';

describe('EntendaMaisComponent', () => {
  let component: EntendaMaisComponent;
  let fixture: ComponentFixture<EntendaMaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntendaMaisComponent]
    });
    fixture = TestBed.createComponent(EntendaMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
