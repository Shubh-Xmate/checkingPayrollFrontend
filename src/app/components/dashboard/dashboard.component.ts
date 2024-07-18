import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { RouterOutlet } from '@angular/router';
import { FetchEmployeeDetailsService } from '../../services/fetch-employee-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeDetails: any;

  constructor(private fetchEmployeeDetailsService: FetchEmployeeDetailsService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(): void {
    this.fetchEmployeeDetailsService.getEmployeeDetails().subscribe(
      (response) => {
        this.employeeDetails = response;
        localStorage.setItem("managerId", this.employeeDetails.managerId);
        localStorage.setItem("employeeId", this.employeeDetails.employeeId);
      },
      (error) => {
        alert(`Error fetching employee details: ${error}`);
      }
    );
  }
}
