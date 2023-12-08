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
  constructor(private userService: UserService, private router: Router) {

    this.form = new FormGroup({
      password: new FormControl(),
      password_confirmation: new FormControl(),
    });





   }

   ngOnInit() {
      this.userService.getUser().subscribe((data: any) => {
        this.user = data;
        this.id = this.user.id;

      });
   }


  async onSubmit(){
    console.log(this.form.value);


    this.userService.updatePassword(this.form.value,this.id).subscribe
    ((data: any) => {
      this.success = data.message + ' Redirigiendo al perfil';
      setTimeout(() => {

        this.router.navigate(['user/profile']);
      }, 3000);

    },(error) => {
      console.log(error);

      this.message = error.error.message;


    }



    );
  }
  cancel(){
    this.router.navigate(['user/profile']);
  }
}
