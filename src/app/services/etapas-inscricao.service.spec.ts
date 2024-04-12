/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EtapasInscricaoService } from './etapas-inscricao.service';

describe('Service: EtapasInscricao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtapasInscricaoService]
    });
  });

  it('should ...', inject([EtapasInscricaoService], (service: EtapasInscricaoService) => {
    expect(service).toBeTruthy();
  }));
});
