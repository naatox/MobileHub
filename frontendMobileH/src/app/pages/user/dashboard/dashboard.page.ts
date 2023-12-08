import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectsService } from 'src/app/services/github/proyects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit  {
  repos: any = [];
  constructor(private proyects: ProyectsService, private router: Router) { }

  ngOnInit(){
    this.proyects.getRepos().subscribe((data: any) => {
      console.log(data);
      this.repos = data;
    });
  }
 repo(name: string){
  this.router.navigate(['user/dashboard/repo', name]);


 }
}
