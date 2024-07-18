import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveDetailsService {

  private apiUrl = 'http://localhost:8082/api/leaveDetails/fetch'; // Replace with your Java API URL

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
    const employeeId = localStorage.getItem("employeeId");
    return this.http.get<any>(`${this.apiUrl}?employeeId=${employeeId}&leaveYear=${year}`);
  }
}
