import { TestBed } from '@angular/core/testing';

import { RequestedLeavesService } from './requested-leaves.service';

describe('RequestedLeavesService', () => {
  let service: RequestedLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestedLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
