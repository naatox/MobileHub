import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/auth/session.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * Constructor de la guardia de autenticación.
   * @param loginService - Servicio de autenticación.
   * @param router - Facilita la navegación a través de la aplicación.
   */
  constructor(private loginService: SessionService, private router: Router) {}

  /**
   * Verifica si el usuario está autenticado antes de permitir el acceso a una ruta protegida.
   * @param route - Instantánea de la ruta activada.
   * @param state - Estado de la ruta activada.
   * @returns True si el usuario está autenticado, de lo contrario, redirige a la página de inicio de sesión.
   */
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token') // Guarda el token
    if(!token) {
      this.router.navigateByUrl('/login');
    } else{
      return true;
    }
    return this.router.navigateByUrl('/login');
  }



}
