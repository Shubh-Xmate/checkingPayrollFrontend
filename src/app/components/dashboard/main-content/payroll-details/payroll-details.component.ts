import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observer } from 'rxjs';
import { PayrollDetailsService } from '../../../../services/payroll-details.service';
import { IPayrollDetails } from './payrollDetails.model';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Adjust imports if necessary
})
export class PayrollDetailsComponent {
  employeeId: number | null=null;
  payrollMonth: string = '';
  payrollYear:number | null = null;
  payrollDetails: IPayrollDetails ={
    employeeId: 0,
    payrollMonth: '',
    payrollYear:0,
    deductions:0,
    netSalary: 0
  };
  // payrollDetails: any;
  showDetails: boolean = false;

  constructor(private payrollService: PayrollDetailsService) {}

  onSubmit() {

    if (this.payrollMonth && this.payrollYear) {
      this.employeeId = Number(localStorage.getItem("employeeId"));
      const observer: Observer<any> = {
        next: (data) => {
          this.payrollDetails = data;
          this.showDetails = true;
        },
        error: (error) => {
          console.error('Error fetching payroll details', error);
        },
        complete: () => {
        }
      };

      this.payrollService.getPayrollDetails(this.employeeId, this.payrollMonth, this.payrollYear).subscribe(observer);
    }
  }
}