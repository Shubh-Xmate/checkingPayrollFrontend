import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observer } from 'rxjs';
import { PayrollDetailsService } from '../../../../services/payroll-details.service';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class PayrollDetailsComponent {
  payrollMonth: string = '';
  payrollYear: number | null = null;
  payrollDetails: any;
  showDetails: boolean = false;

  constructor(private payrollService: PayrollDetailsService) {}

  onSubmit() {
    if (this.payrollMonth && this.payrollYear) {
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

      this.payrollService.getPayrollDetails(this.payrollMonth, this.payrollYear).subscribe(observer);
    }
  }
}














// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-payroll-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './payroll-details.component.html',
//   styleUrl: './payroll-details.component.css'
// })
// export class PayrollDetailsComponent {
//
// }
