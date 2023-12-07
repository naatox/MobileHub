import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnDestroy, OnInit {

  authUser: any = [];
  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(
      (res) => {
        this.authUser = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  a(){
    console.log("a");
    this.router.navigate(['/edit-profile']);
  }
  ngOnDestroy() {
    this.authUser = [];
  }
}
