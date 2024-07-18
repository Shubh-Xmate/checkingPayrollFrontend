import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestedLeavesService } from '../../../../services/requested-leaves.service';
import { UpdateLeaveStatusService } from '../../../../services/update-leave-status.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-requested-leaves',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './requested-leaves.component.html',
  styleUrl: './requested-leaves.component.css'
})

export class RequestedLeavesComponent {
  tabs: string[] = ['All', 'PENDING', 'APPROVED', 'REJECTED'];
  activeTab: number = 0;
  mainTabData: any[] = [];
  tabData: any[] = [];
  dataLoaded: boolean = false;

  constructor(private requestedLeavesService : RequestedLeavesService, private updateLeaveStatusService: UpdateLeaveStatusService){}

  ngOnInit(): void {
    this.fetchDataForTab(this.activeTab);
  }

  changeTab(index: number): void {
    this.activeTab = index;
    this.fetchDataForTab(index);
  }

  fetchDataForTab(index: number): void {
    this.dataLoaded = true;
    let employeeId = Number(localStorage.getItem('employeeId'));
    this.requestedLeavesService.getRequestedLeaves(employeeId).subscribe(data => {
      this.mainTabData = data;
      this.tabData = data;
      this.filterData(index);
    })
  }

  filterData(index: number): void {
    if (index === 0) {
      this.tabData = this.tabData; // All
    } else if (index === 1) {
      this.tabData = this.mainTabData.filter(item => item.status === 'PENDING');
    } else if (index === 2) {
      this.tabData = this.mainTabData.filter(item => item.status === 'APPROVED');
    } else if (index === 3) {
      this.tabData = this.mainTabData.filter(item => item.status === 'REJECTED');
    }
    console.log("tab data:", this.tabData);
  }

  updateLeaveStatus(leaveId: string, updatedStatus: string, item: any[]) {

    this.updateLeaveStatusService.updateLeaveStatus(leaveId, updatedStatus, item).subscribe(
      (response) => {
        this.fetchDataForTab(this.activeTab);
      },
      (error) => {
        alert(`Error fetching updating leave details ${error}`);
      }
    );
  }
}
