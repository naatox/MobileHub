import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  message: string = "";
  email: string = "";
  password: string = "";
  form: FormGroup;
  constructor(private logService: LoginService, private router: Router, private alertCtrl: AlertController) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

   }

  ngOnInit() {}
  async onSubmit(){
    const alert = document.getElementById('alert');
    const response = await this.logService.login(this.form.value).subscribe(
      (data) => {
        // Manejar la respuesta exitosa aquí
        localStorage.setItem('token', data.authorization.token);
        console.log(data);

      },
      (error) => {
        // Manejar el error aquí
        this.message = error.error.message;
        if(!this.message){
          this.message = 'Error de servidor';

        }

        if (alert != null){
          alert.style.display = 'block';
          this.form.reset();
        }

        console.error('Error al registrar usuario', error);
      });;

  }
  logout(){
    this.logService.logout();
  }

}
