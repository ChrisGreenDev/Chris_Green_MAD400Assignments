import { TestBed } from '@angular/core/testing';

import { StreetwearService } from './streetwear.service';

describe('StreetwearService', () => {
  let service: StreetwearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreetwearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
