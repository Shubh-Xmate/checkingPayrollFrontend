import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../components/dashboard/main-content/create-employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {
  private updateApiUrl = 'http://localhost:8090/api/update';

  constructor(private http: HttpClient) { }

  updateEmployee(employee: IEmployee, mobileNumber: Number|null): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.updateApiUrl}?mobileNumber=${mobileNumber}`, employee);
  }
}