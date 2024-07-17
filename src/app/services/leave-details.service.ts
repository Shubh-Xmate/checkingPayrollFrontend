import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailsService {

  private apiUrl = 'https://catfact.ninja/fact'; // Replace with your Java API URL

  leaveDetails: any = {
    remainingSickLeaves: Number,
    remainingCasualLeaves: Number,
    remainingEarnedLeaves: Number,
    leaveYear: Number,
    paidLeaves: Number,
    totalPaidLeaves: Number
  }

  constructor(private http: HttpClient) { }

  getLeaveDetails(year: string): Observable<any> {
    this.leaveDetails.remainingSickLeaves = 0,
    this.leaveDetails.remainingCasualLeaves = 0,
    this.leaveDetails.remainingEarnedLeaves = 0,
    this.leaveDetails.leaveYear = 0,
    this.leaveDetails.paidLeaves = 0,
    this.leaveDetails.totalPaidLeaves = 0;

    return of(this.leaveDetails);
    // return this.http.get<any>(`${this.apiUrl}?year=${year}`);
  }
}
