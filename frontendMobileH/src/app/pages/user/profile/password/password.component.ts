import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent  implements OnInit {

  user: any = [];
  id: number = 0;
  message: string = "";
  success: string = "";
  password: string = "";
  password_confirmation: string = "";
  form: FormGroup;

  /**
   * Constructor del componente.
   * @param userService Servicio de usuario para realizar operaciones relacionadas con la contraseña.
   * @param router Servicio de enrutamiento para navegar entre páginas.
   */
  constructor(private userService: UserService, private router: Router) {

    this.form = new FormGroup({
      password: new FormControl(),
      password_confirmation: new FormControl(),
    });
   }

   /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene los datos del usuario para obtener su identificador único.
   */
   ngOnInit() {
      this.userService.getUser().subscribe((data: any) => {
        this.user = data;
        this.id = this.user.id;

      });
   }

   /**
   * Método invocado al enviar el formulario de cambio de contraseña.
   * Realiza la llamada al servicio para actualizar la contraseña del usuario.
   */
  async onSubmit(){

    this.userService.updatePassword(this.form.value,this.id).subscribe
    ((data: any) => {
      this.success = data.message + ' Redirigiendo al perfil';
      setTimeout(() => {

        this.router.navigate(['user/profile']);
      }, 3000);

    },(error) => {

      this.message = error.error.message;

    });
  }

  /**
   * Método para cancelar el cambio de contraseña y volver a la página de perfil.
   */
  cancel(){
    this.router.navigate(['user/profile']);
  }
}
