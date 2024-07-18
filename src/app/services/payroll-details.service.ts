import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IPayrollDetails } from '../components/dashboard/main-content/payroll-details/payrollDetails.model';

@Injectable({
  providedIn: 'root'
})
export class PayrollDetailsService {

  private apiUrl = 'http://localhost:8080/api/payroll/fetch';

  payrollDetails: IPayrollDetails={
    employeeId: 0,
    payrollMonth: '',
    payrollYear:0,
    deductions:0,
    netSalary: 0
  }
  constructor(private http: HttpClient) { }

  getPayrollDetails(employeeId:number,payrollMonth: string,payrollYear: number): Observable<IPayrollDetails> {
    // this.payrollDetails.payrollMonth = payrollMonth;
    // this.payrollDetails.payrollYear = payrollYear;

    //return of(this.payrollDetails);
    // In the future, replace the above line with an actual API call
    return this.http.get<IPayrollDetails>(`${this.apiUrl}?employeeId=${employeeId}&payrollMonth=${payrollMonth}&payrollYear=${payrollYear}`);
  }
}
