import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }



}
