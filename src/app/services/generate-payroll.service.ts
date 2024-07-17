import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayrollGenerationService {

  private apiUrl = 'http://localhost:8080/api/payroll'; // Replace with your Java API URL

  payrollDetails: any = {
    netSalary: 5000,
    deductions: 200,
    payrollMonth: '',
    payrollYear: 0
  };

  constructor(private http: HttpClient) { }

  generatePayrollByMobileNumber(mobileNumber: number): Observable<any> {
    // For demo purposes, mock data is returned here
    this.payrollDetails.payrollMonth = 'July';
    this.payrollDetails.payrollYear = 2024;
    this.payrollDetails.deductions = 200;
    this.payrollDetails.netSalary = 5000;

    return of(this.payrollDetails);
    // Use actual API call to backend service
    // return this.http.post<any>(`${this.apiUrl}/generate/${mobileNumber}`, null);
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GeneratePayrollService {
//
//   private apiUrl = 'http://localhost:8080/api/payroll'; // Replace with your Java API URL
//
//   constructor(private http: HttpClient) { }
//
//   getPayrollDetailsByMobileNumber(mobileNumber: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/employee/${mobileNumber}`);
//   }
// }







