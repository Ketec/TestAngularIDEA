import { TestBed } from '@angular/core/testing';

import { IdealibService } from './idealib.service';

describe('IdealibService', () => {
  let service: IdealibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdealibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
