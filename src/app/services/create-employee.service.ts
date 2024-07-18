import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IEmployee } from '../components/dashboard/main-content/create-employee/employee.model';
import { SidebarComponent } from '../components/dashboard/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})

export class CreateEmployeeService {
  private createApiUrl = 'http://localhost:8090/api/create';
  // private createApiUrl = 'http://localhost:8072/payroll/employee/api/create';
  constructor(private http: HttpClient) { }
  createEmployee(employee: IEmployee): Observable<IEmployee> {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      throw new Error('No access token available');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<IEmployee>(this.createApiUrl, employee, { headers })
      .pipe(
        catchError(error => {
          // Handle error (e.g., token expired, unauthorized)
          console.error('Error creating employee:', error);
          throw error; // Rethrow or handle as needed
        })
      );
  }

}