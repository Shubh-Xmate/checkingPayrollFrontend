import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UpdateLeaveStatusService {
  private updateStatusApiUrl = 'http://localhost:8082/api/changestatus';

  constructor(private http: HttpClient) { }

  updateLeaveStatus(leaveId: string, updatedStatus: string, item: any[]): Observable<any> {
    return this.http.put<any>(`${this.updateStatusApiUrl}?leaveId=${leaveId}&status=${updatedStatus}`, item);
  }
}