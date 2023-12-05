import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = "http://127.0.0.1:8000/api";
   }

   register(formValue: any){
     return this.http.post<any>(`${this.apiUrl}/register`, formValue);
   }
}
