import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IEmployee } from '../create-employee/employee.model';
import { UpdateEmployeeService } from '../../../../services/update-employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  mobileNumber: Number | null = null; 
  employee: IEmployee = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    dob: new Date(),
    managerId: null,
    roleId: '',
    dateOfJoining: new Date(),
    salaryId: null,
    employeeId: 1  // localStorage.employeeId
  };

  sentSuccessfully: boolean = false;
  showDetails: boolean = false;

  constructor(private updateEmployeeService : UpdateEmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // this.employee = form.value;
      // console.log('Employee Data:', this.employee);
        this.updateEmployeeService.updateEmployee(this.employee,this.mobileNumber).subscribe({
          next: (response) => {
            console.log('Employee updated successfully:', response);
            this.sentSuccessfully = true;
            this.showDetails = true;
          },
          error: (error) => {
            console.error('Error updating employee:', error);
            this.sentSuccessfully = false;
            this.showDetails = true;
          }
        });
    }
  }
}