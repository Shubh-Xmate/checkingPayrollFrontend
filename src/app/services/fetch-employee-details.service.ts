import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchEmployeeDetailsService {

  private apiUrl = 'http://localhost:8090/api/fetch'; // Replace with your Java API URL

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<any> {
    const mobileNumber = localStorage.getItem("mobileNumber");
    return this.http.get<any>(`${this.apiUrl}?mobileNumber=${mobileNumber}`);
  }
}
