import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IEmployee } from '../create-employee/employee.model';
import { DeleteEmployeeService } from '../../../../services/delete-employee.service';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {
  mobileNumber: Number | null = null; 

  sentSuccessfully: boolean = false;
  showDetails: boolean = false;

  constructor(private deleteEmployeeService : DeleteEmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // this.employee = form.value;
      // console.log('Employee Data:', this.employee);
        this.deleteEmployeeService.deleteEmployee(this.mobileNumber).subscribe({
          next: (response) => {
            console.log('Employee deleted successfully:', response);
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