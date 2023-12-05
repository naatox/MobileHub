import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  implements OnInit {

  constructor(private logservice: LoginService) { }

  ngOnInit() {}

  logout(){
    this.logservice.logout();
  }

}
