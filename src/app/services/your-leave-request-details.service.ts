import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourLeaveRequestDetailsService {

  constructor(private http : HttpClient) { }
  private apiUrl = "http://localhost:8082/api/fetchall";
  requestedLeaves: any[] = []
   ;
  
  getRequestedLeaves(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?employeeId=${employeeId}`)
    .pipe(

      map(response => {
        this.requestedLeaves = response; // Store the response data in the array
        console.log(this.requestedLeaves);
        return this.requestedLeaves;
      }),

      catchError(error => {
        console.error('Error fetching requested leaves:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }
}
