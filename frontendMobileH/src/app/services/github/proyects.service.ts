import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  apiUrl: string;

  /**
   * Constructor del servicio.
   * @param http Cliente HTTP para realizar peticiones.
   *
   */
  constructor(private http: HttpClient) {
    this.apiUrl = "https://api.github.com";
   }


   /**
    * Método para obtener los repositorios del usuario Dizkm8.
    * @returns Repositorios del usuario.
    */
  getRepos() {
    return this.http.get(`${this.apiUrl}/users/Dizkm8/repos`)
  }

  /**
   * Método para obtener los commits de un repositorio.
   * @param repo Nombre del repositorio.
   * @returns Commits del repositorio.
   */
  getCommits(repo: string) {
    return this.http.get(`${this.apiUrl}/repos/Dizkm8/${repo}/commits`)
  }

  /**
   * Método para obtener la información de un repositorio.
   * @param repo Nombre del repositorio.
   * @returns Información del repositorio.
   */
  getRepo(repo: string) {
    return this.http.get(`${this.apiUrl}/repos/Dizkm8/${repo}`)
  }
}
