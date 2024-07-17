import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../components/dashboard/main-content/create-employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8090/api/fetchById';

  employee: IEmployee = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dob: new Date(),
    managerId: 0,
    roleId: '',
    dateOfJoining: new Date(),
    salaryId: 0,
    employeeId: 0
  };

  constructor(private http: HttpClient) { }

  getEmployeeDetails(employeeId: Number): Observable<IEmployee> {
    // this.employee.firstName = 'Parneet',
    // this.employee.lastName = 'Singh',
    // this.employee.mobileNumber = '9811997645',
    // this.employee.dob=new Date('2002-08-30'),
    // this.employee.managerId = 1,
    // this.employee.roleId = 'admin',
    // this.employee.dateOfJoining = new Date('2022-08-28'),
    // this.employee.salaryId = 1

    // return of(this.employee);
    return this.http.get<IEmployee>(`${this.apiUrl}?employeeId=${employeeId}`)
  }
}