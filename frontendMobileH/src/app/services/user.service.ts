import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://127.0.0.1:8000/api";
   }
  getUser() {
    const tokenUser = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + tokenUser
    });
    return this.http.get(`${this.apiUrl}/user`,{headers: headers})
  }
  updatePassword(data: any) {}

  edituser(data: any) {
    const tokenUser = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + tokenUser
    });
    return this.http.put(`${this.apiUrl}/edit`,data,{headers: headers})

  }

}
