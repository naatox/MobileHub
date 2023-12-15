import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/auth/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})


export class NavbarPage{

  /**
   * Constructor del componente.
   * @param logservice Servicio de sesión para realizar operaciones relacionadas con la autenticación.
   */
  constructor(private logservice: SessionService) { }

  /**
   * Método para cerrar la sesión del usuario.
   * Invoca el servicio de sesión para realizar la operación de cierre de sesión.
   */
  logout(){
    alert("Sesión cerrada");
    this.logservice.logout();
  }

}
