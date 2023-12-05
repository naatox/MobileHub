import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegisterService } from 'src/app/services/guest/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  message: string = "";
  fullName: string = "";
  email: string = "";
  birthYear: number = 0;
  rut: string = "";
  form: FormGroup;
  constructor(private regService: RegisterService, private router: Router, private alertCtrl: AlertController) {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      birthYear: new FormControl(),
      rut: new FormControl()
    });

   }

  ngOnInit() {}


  async onSubmit(){



    console.log(this.form.value);
    this.regService.register(this.form.value).subscribe
    ((data) => {

      //this.router.navigate(['/login']);
      console.log(data);

    },(error) => {
      console.log(error);

      this.message = error.error.message;




      console.log(this.message);


    }



    );
  }


}
