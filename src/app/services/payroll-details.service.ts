import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayrollDetailsService {

  private apiUrl = 'http://localhost:8080/api/payroll'; // Replace with your Java API URL

  payrollDetails: any = {
    netSalary: 5000,
    deductions: 200,
    payrollMonth: '',
    payrollYear: 0
  }

  constructor(private http: HttpClient) { }

  getPayrollDetails(month: string, year: number): Observable<any> {
    this.payrollDetails.payrollMonth = month;
    this.payrollDetails.payrollYear = year;

    return of(this.payrollDetails);
    // In the future, replace the above line with an actual API call
    // return this.http.get<any>(`${this.apiUrl}?month=${month}&year=${year}`);
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PayrollDetailsService {
//   private apiUrl = 'http://localhost:8080/api/payroll'; // Replace with your Java API URL
//
//   constructor(private http: HttpClient) { }
//
//   getPayrollDetails(month: string, year: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}?month=${month}&year=${year}`);
//   }
// }
