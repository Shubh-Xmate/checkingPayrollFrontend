import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../components/dashboard/main-content/create-employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  private deleteApiUrl = 'http://localhost:8090/api/delete';

  constructor(private http: HttpClient) { }

  deleteEmployee(mobileNumber: Number|null): Observable<IEmployee> {
    return this.http.delete<IEmployee>(`${this.deleteApiUrl}?mobileNumber=${mobileNumber}`);
  }
}