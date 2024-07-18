import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LeaveDto } from './leave-request.model';
import { LeaveRequestService } from '../../../../services/leave-request.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LeaveRequestComponent {

  leaveDetails: LeaveDto = {
    employeeId: 0,
    leaveType: '',
    startDate: new Date(),
    endDate: new Date(),
    appliedDate: '',
    status: '',
    comments: '',
    managerId: 0
  };

  sentSuccessfully: boolean = false;
  showDetails: boolean = false;

  constructor(private leaveRequestService: LeaveRequestService) {}
  ngOnInit(): void{

  }

  onSubmit() {
    const employeeId = Number(localStorage.getItem("employeeId"));
    this.leaveDetails.employeeId = employeeId;
    this.leaveDetails.status = "PENDING";
    this.leaveDetails.managerId = Number(localStorage.getItem("managerId"));
    this.leaveDetails.appliedDate = new Date().toISOString().split('T')[0];

    this.showDetails = true;

    const observer: Observer<any> = {
      next: (data) => {
        this.sentSuccessfully = true;
      },
      error: (error) => {
        console.error('Error fetching leave requests', error);
      },
      complete: () => {
      }
    };
    this.leaveRequestService.createLeave(this.leaveDetails).subscribe(observer);
    console.log(this.leaveDetails);
  }
};