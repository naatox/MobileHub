import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl: string;
  /**
   * Constructor del servicio.
   * @param http Cliente HTTP para realizar peticiones.
   * @param router Servicio de enrutamiento para la navegación entre páginas.
   */
  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = "http://127.0.0.1:8000/api";
   }

   /**
    * Metodo para el inicio de sesión.
    * @param formValue Datos del formulario de inicio de sesión.
    * @returns Respuesta de la petición, que incluye el usuario y el token de autenticación.
    */
  login(formValue: any){
    return this.http.post<any>(`${this.apiUrl}/login`, formValue);
  }

  /**
   * Método para cerrar sesión.
   * Elimina el token de autenticación del almacenamiento local y redirige a la página de inicio.
   */
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);

  }

  /**
   * Método para registrar un usuario.
   * @param formValue Datos del formulario de registro.
   * @returns Respuesta de la petición.
   */
  register(formValue: any){
    return this.http.post<any>(`${this.apiUrl}/register`, formValue);
  }
}
