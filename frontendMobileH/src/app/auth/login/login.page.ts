import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/auth/session.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  message: string = "";
  email: string = "";
  password: string = "";
  form: FormGroup;
  constructor(private logService: SessionService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

   }


  async onSubmit(){
    const alert = document.getElementById('alert');
    const response = await this.logService.login(this.form.value).subscribe(
      (data) => {

        localStorage.setItem('token', data.authorization.token);
        console.log(data);
        setTimeout(() => {

          this.router.navigate(['user/dashboard']);
      }, 2000);
      },
      (error) => {

        this.message = error.error.message;
        if(!this.message){
          this.message = 'Error de servidor';

        }
        this.form.reset();
        console.error('Error al registrar usuario', error);
      });;

  }
  logout(){
    this.logService.logout();
  }

}
