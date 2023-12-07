import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {

  id: number = 0;
  message: string = "";
  success: string = "";
  fullName: string = "";
  email: string = "";
  birthYear: number = 0;
  form: FormGroup;
  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      birthYear: new FormControl(),
      rut: new FormControl()
    });

   }


  async onSubmit(){

    console.log(this.form.value);
    this.userService.edituser(this.form.value).subscribe
    ((data: any) => {
      console.log(data);
      this.success = data.message + ' Redirigiendo a login';
      setTimeout(() => {

        this.router.navigate(['/profile']);
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
