import { TestBed } from '@angular/core/testing';

import { YourLeaveRequestDetailsService } from './your-leave-request-details.service';

describe('YourLeaveRequestDetailsService', () => {
  let service: YourLeaveRequestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourLeaveRequestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
