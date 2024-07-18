import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../components/dashboard/main-content/create-employee/employee.model';

@Injectable({
  providedIn: 'root'
})

export class CreateEmployeeService {
  private createApiUrl = 'http://localhost:8090/api/create';

  constructor(private http: HttpClient) { }

  createEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.createApiUrl, employee);
  }
}