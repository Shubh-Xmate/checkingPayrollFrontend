import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observer } from 'rxjs';
import { ProfileService } from '../../../../services/profile.service';
import { IEmployee } from '../create-employee/employee.model';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
  })

export class ProfileComponent {
  employeeId: Number | null = null; 
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
  
  showDetails: boolean = false;

  constructor(private profileService : ProfileService) {}

  onSubmit() {
    if (this.employeeId) {
      const observer: Observer<IEmployee> = {
        next: (data) => {
          this.employee = data;
          this.showDetails = true;
        },
        error: (error) => {
          console.error('Error fetching employee details', error);
        },
        complete: () => {
        }
      };

      this.profileService.getEmployeeDetails(this.employeeId).subscribe(observer);
    }
  }
}
