import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeaveDto } from './leave-request.model';

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
    appliedDate: new Date(),
    status: '',
    comments: '',
    managerId: 0
  };

  sentSuccessfully: boolean = false;
  showDetails: boolean = false;

  constructor() {}

  onSubmit() {
    this.leaveDetails.employeeId = 1;
    this.leaveDetails.status = "pending";
    this.leaveDetails.managerId = 2;
    this.leaveDetails.appliedDate = new Date();
    console.log(this.leaveDetails);
    this.showDetails = true;
    if(this.leaveDetails.leaveType == 'abc') this.sentSuccessfully = true;
    else this.sentSuccessfully = false;
    // You can add your service call here to submit the form data
  }
};