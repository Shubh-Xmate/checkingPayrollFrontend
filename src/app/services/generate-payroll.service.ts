import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IGeneratePayrollDetails } from '../components/dashboard/main-content/generate-payroll/generatePayroll.model';

@Injectable({
  providedIn: 'root'
})
export class GeneratePayrollService {

  private apiUrl = 'http://localhost:8080/api/payroll/create'; // Replace with your Java API URL


  constructor(private http: HttpClient) { }

  generatePayrollByMobileNumber(mobileNumber:number): Observable<IGeneratePayrollDetails> {

    return this.http.post<IGeneratePayrollDetails>(`${this.apiUrl}?mobileNumber=${mobileNumber}`, null);
  }
}



