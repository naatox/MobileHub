import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from 'src/app/services/auth/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  message: string = "";
  success: string = "";
  fullName: string = "";
  email: string = "";
  birthYear: number = 0;
  rut: string = "";
  form: FormGroup;
  /**
   * Constructor del componente.
   * @param regService Servicio de registro de usuarios.
   * @param router Servicio de enrutamiento para la navegación entre páginas.
   */
  constructor(private regService: SessionService, private router: Router) {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      birthYear: new FormControl(),
      rut: new FormControl()
    });

   }

   /**
   * Método invocado al enviar el formulario de registro.
   */
  async onSubmit(){
    this.regService.register(this.form.value).subscribe
    ((data) => {
      this.success = data.message + ' Redirigiendo a login';
      setTimeout(() => {

        this.router.navigate(['/login']);
      }, 3000);

    },(error) => {

      this.message = error.error.message;


    }



    );
  }
}
