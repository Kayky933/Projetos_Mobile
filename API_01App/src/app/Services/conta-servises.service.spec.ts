import { TestBed } from '@angular/core/testing';

import { ContaapiService } from './conta-servises.service';

describe('ContaapiService', () => {
  let service: ContaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
