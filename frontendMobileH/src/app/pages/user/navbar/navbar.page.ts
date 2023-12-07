import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/auth/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage{

  constructor(private logservice: SessionService) { }

  logout(){
    this.logservice.logout();
  }

}
