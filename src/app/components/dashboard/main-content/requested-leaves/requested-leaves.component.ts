import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-requested-leaves',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './requested-leaves.component.html',
  styleUrl: './requested-leaves.component.css'
})

export class RequestedLeavesComponent {
  tabs: string[] = ['All', 'Pending', 'Accepted', 'Declined'];
  activeTab: number = 0;
  tabData: any[] = [];
  dataLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.fetchDataForTab(this.activeTab);
  }

  changeTab(index: number): void {
    this.activeTab = index;
    this.fetchDataForTab(index);
  }

  fetchDataForTab(index: number): void {
    this.dataLoaded = true;
    this.tabData = [
      {
        title: "first",
        description: "description1"
      },
      {
        title: "first2",
        description: "description2"
      },
      {
        title: "first3",
        description: "description3"
      }
    ]
    console.log(this.tabData);
    console.log(index);
  }
}
