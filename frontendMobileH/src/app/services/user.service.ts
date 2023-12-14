import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string;
  /**
   * Constructor del servicio.
   * @param http Cliente HTTP para realizar peticiones.
   */
  constructor(private http: HttpClient) {
    this.apiUrl = "http://127.0.0.1:8000/api";
   }

  /**
   * Método para obtener la información del usuario autenticado.
   * @returns Información del usuario.
   */
  getUser() {
    const tokenUser = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + tokenUser
    });
    return this.http.get(`${this.apiUrl}/user`,{headers: headers})
  }

  /**
   * Método editar la contraseña del usuario autenticado.
   * @param data Datos del formulario de edición de contraseña.
   * @param id Identificador del usuario autenticado.
   * @returns Respuesta de la petición.
   */
  updatePassword(data: any, id: number) {
    const tokenUser = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + tokenUser
    });
    return this.http.put(`${this.apiUrl}/password`,data,{headers: headers, params: {id: id}})
  }

  /**
   * Método para editar la información del usuario autenticado.
   * @param data Datos del formulario de edición de perfil.
   * @param id Identificador del usuario autenticado.
   * @returns Respuesta de la petición.
   */
  edituser(data: any, id: number) {
    const tokenUser = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + tokenUser
    });
    return this.http.put(`${this.apiUrl}/edit`,data,{headers: headers, params: {id: id}})

  }

}
