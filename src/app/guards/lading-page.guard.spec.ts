import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ladingPageGuard } from './lading-page.guard';

describe('ladingPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ladingPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
