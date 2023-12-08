import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  user: any = [];
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
      email: new FormControl(this.user.email),
      birthYear: new FormControl(this.user.birthYear),
    });





   }

   ngOnInit() {
      this.userService.getUser().subscribe((data: any) => {
        this.user = data;
        this.id = this.user.id;
        this.form.patchValue({
          fullName: this.user.fullName,
          email: this.user.email,
          birthYear: this.user.birthYear,
        });

      });
   }


  async onSubmit(){
    console.log(this.form.value);
    if(this.form.value.fullName == null){
      this.form.value.fullName = this.user.fullName;
    }
    if(this.form.value.email == null){
      this.form.value.email = this.user.email;
    }
    if(this.form.value.birthYear == null){
      this.form.value.birthYear = this.user.birthYear;
    }

    this.userService.edituser(this.form.value,this.id).subscribe
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