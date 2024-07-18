import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YourLeaveRequestDetailsService } from '../../../../services/your-leave-request-details.service';

@Component({
  selector: 'app-requested-leaves',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './your-leave-requests.component.html',
  styleUrl: './your-leave-requests.component.css'
})

export class YourLeaveRequestComponent {
  tabs: string[] = ['All', 'PENDING', 'APPROVED', 'REJECTED'];
  activeTab: number = 0;
  mainTabData: any[] = [];
  tabData: any[] = [];
  dataLoaded: boolean = false;

  constructor(private yourLeaveRequestDetailsService : YourLeaveRequestDetailsService){}

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
    this.yourLeaveRequestDetailsService.getRequestedLeaves(employeeId).subscribe(data => {
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
}
