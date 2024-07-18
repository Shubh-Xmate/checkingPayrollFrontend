import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratePayrollService } from '../../../../services/generate-payroll.service';
import {FormsModule, NgForm} from "@angular/forms";
import { IGeneratePayrollDetails } from './generatePayroll.model';


@Component({
  selector: 'app-generate-payroll',
  templateUrl: './generate-payroll.component.html',
  styleUrls: ['./generate-payroll.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class GeneratePayrollComponent implements OnInit{
  mobileNumber: number | null = null;
  generatePayrollDetails: IGeneratePayrollDetails = {
    employeeId:0,
    payrollMonth: '',
    payrollYear: 0,
    deductions: 0,
    netSalary: 0
  };
  sentSuccessfully: boolean = false;
  showDetails: boolean = false;

  constructor(private generatePayrollService: GeneratePayrollService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (this.mobileNumber) {
      this.generatePayrollService.generatePayrollByMobileNumber(this.mobileNumber).subscribe({
        next: (response) => {
          console.log('Payroll created successfully:', response);
          this.sentSuccessfully=true;
          this.showDetails = true;
        },
        error: (error) => {
          console.error('Error generating payroll:', error);
          this.sentSuccessfully=false;
          this.showDetails=false;
        }
      });

    }
  }
}