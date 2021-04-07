import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  
  private baseURL="http://localhost:8080//api/v1/employee/getallemployees";
  constructor(private httpClient:HttpClient) { }

  getEmployeeList(employee:Employee):Observable<Employee[]>{
    return this.httpClient.post<Employee[]>(`${this.baseURL}`,employee);
  }
}
