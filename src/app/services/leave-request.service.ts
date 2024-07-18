import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveDto } from '../components/dashboard/main-content/leave-request/leave-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private createApiUrl = 'http://localhost:8082/api/create';

  constructor(private http: HttpClient) { }

  createLeave(leave: LeaveDto): Observable<LeaveDto> {
    return this.http.post<LeaveDto>(this.createApiUrl, leave);
  }
}
