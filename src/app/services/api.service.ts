import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://empserverangular.onrender.com'

  constructor( private http:HttpClient) { }

  userLogin(){
    return this.http.get(`${this.baseUrl}/users/1`)
  }

  addEmployee(data:any){
    return this.http.post(`${this.baseUrl}/employees`,data)
  }

  getEmployee(){
    return this.http.get(`${this.baseUrl}/employees`)
  }

  dltEmployee(id:any){
    return this.http.delete(`${this.baseUrl}/employees/${id}`)
  }

  editEmployee(id:any,data:any){
    return this.http.put(`${this.baseUrl}/employees/${id}`,data)
  }

  getAdmin(){
    return this.http.get(`${this.baseUrl}/users/1`)
  }

  getEmp(id:any){
    return this.http.get(`${this.baseUrl}/employees/${id}`)
  }

  updateAdmin(data:any){
    return this.http.put(`${this.baseUrl}/users/1`,data)
  }
}
