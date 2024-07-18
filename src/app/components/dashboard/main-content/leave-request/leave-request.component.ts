import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LeaveDto } from './leave-request.model';
import { LeaveRequestService } from '../../../../services/leave-request.service';

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

  onSubmit(form: NgForm) {
    const employeeId = Number(localStorage.getItem("employeeId"));
    this.leaveDetails.employeeId = employeeId;
    this.leaveDetails.status = "Pending";
    this.leaveDetails.managerId = Number(localStorage.getItem("managerId"));
    this.leaveDetails.appliedDate = new Date().toISOString().split('T')[0];

    this.showDetails = true;
    this.leaveRequestService.createLeave(this.leaveDetails);
    console.log(this.leaveDetails);
  }
};