import { TestBed } from '@angular/core/testing';

import { UpdateLeaveStatusService } from './update-leave-status.service';

describe('UpdateLeaveStatusService', () => {
  let service: UpdateLeaveStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateLeaveStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
