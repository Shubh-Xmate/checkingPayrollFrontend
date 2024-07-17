import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observer } from 'rxjs';
import { LeaveDetailsService } from '../../../../services/leave-details.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Adjust imports if necessary
})
export class LeaveDetailsComponent {
  leaveYear: string = ''; // Initialize leaveYear to an empty string
  leaveDetails: any;
  showDetails: boolean = false;

  constructor(private leaveService: LeaveDetailsService) {}

  onSubmit() {
    if (this.leaveYear) {
      const observer: Observer<any> = {
        next: (data) => {
          this.leaveDetails = data;
          this.showDetails = true;
        },
        error: (error) => {
          console.error('Error fetching leave details', error);
        },
        complete: () => {
        }
      };

      this.leaveService.getLeaveDetails(this.leaveYear).subscribe(observer);
    }
  }
}