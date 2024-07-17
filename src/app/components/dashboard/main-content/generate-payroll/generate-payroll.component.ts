import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observer } from 'rxjs';
import { PayrollGenerationService } from '../../../../services/generate-payroll.service';
import {FormsModule} from "@angular/forms";


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
export class GeneratePayrollComponent {
  mobileNumber: number | null = null;
  payrollDetails: any = {
    payrollMonth: 'July',
    payrollYear: 2024,
    deductions: 200,
    netSalary: 5000
  };
  showDetails: boolean = false;

  constructor(private payrollService: PayrollGenerationService) {}

  onSubmit() {
    if (this.mobileNumber) {
      const observer: Observer<any> = {
        next: (data) => {
          this.payrollDetails = data;
          this.showDetails = true;
        },
        error: (error) => {
          console.error('Error generating payroll', error);
        },
        complete: () => {}
      };

      this.payrollService.generatePayrollByMobileNumber(this.mobileNumber).subscribe(observer);
    }
  }
}










// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-generate-payroll',
//   standalone: true,
//   imports: [],
//   templateUrl: './generate-payroll.component.html',
//   styleUrl: './generate-payroll.component.css'
// })
// export class GeneratePayrollComponent {
//
// }
