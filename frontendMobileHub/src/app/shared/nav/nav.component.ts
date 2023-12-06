import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/auth/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  {

  constructor(private logservice: SessionService, private router: Router) { }

  logout(){
    this.logservice.logout();
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  dash(){
    this.router.navigate(['/dashboard']);
  }

}
