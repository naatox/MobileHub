import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnDestroy, OnInit {

  authUser: any = [];

  /**
   * Constructor del componente.
   * @param userService Servicio de usuario para obtener información del usuario autenticado.
   * @param router Servicio de enrutamiento para navegar entre páginas.
   */
  constructor(private userService: UserService, private router: Router) {

  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Llama al método `getUser` para obtener la información del usuario autenticado.
   */
  ngOnInit() {
    this.getUser();
  }

  /**
   * Método para obtener la información del usuario autenticado.
   * Actualiza la propiedad `authUser` con la información del usuario.
   */
  getUser() {
    this.userService.getUser().subscribe(
      (res) => {
        this.authUser = res;
      },
      (err) => {
      }
    )
  }

  /**
   * Método que se ejecuta al destruir el componente.
   * Limpia la información del usuario autenticado.
   */
  ngOnDestroy() {
    this.authUser = [];
  }
}
