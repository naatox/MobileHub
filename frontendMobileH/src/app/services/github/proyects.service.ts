import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "https://api.github.com";
   }

  getRepos() {
    return this.http.get(`${this.apiUrl}/users/Dizkm8/repos`)
  }
  getCommits(repo: string) {
    return this.http.get(`${this.apiUrl}/repos/Dizkm8/${repo}/commits`)
  }
  getRepo(repo: string) {
    return this.http.get(`${this.apiUrl}/repos/Dizkm8/${repo}`)
  }
}
