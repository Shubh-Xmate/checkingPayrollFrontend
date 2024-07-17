import { TestBed } from '@angular/core/testing';

import { LeaveDetailsService } from './leave-details.service';

describe('LeaveDetailsService', () => {
  let service: LeaveDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
