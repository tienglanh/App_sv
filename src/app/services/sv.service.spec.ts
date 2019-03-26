import { TestBed } from '@angular/core/testing';

import { SVService } from './sv.service';

describe('SVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SVService = TestBed.get(SVService);
    expect(service).toBeTruthy();
  });
});
