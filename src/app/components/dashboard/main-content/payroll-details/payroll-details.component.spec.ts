import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollDetailsComponent } from './payroll-details.component';
import {CommonModule} from "@angular/common";

describe('PayrollDetailsComponent', () => {
  let component: PayrollDetailsComponent;
  let fixture: ComponentFixture<PayrollDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});