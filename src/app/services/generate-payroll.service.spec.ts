import { TestBed } from '@angular/core/testing';

import { GeneratePayrollService } from './generate-payroll.service';

describe('GeneratePayrollService', () => {
  let service: GeneratePayrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePayrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
