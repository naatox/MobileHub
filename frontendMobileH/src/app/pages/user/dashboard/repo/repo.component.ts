import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectsService } from 'src/app/services/github/proyects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent  implements OnInit {
  proyectName: string = "";
  repo : any = [];
  commits: any = [];
  constructor(private proyect: ProyectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("repo");
    this.getRepo();
    this.getCommits();
  }

  getRepo(){
    this.proyectName= this.route.snapshot.params['name'];
    this.proyect.getRepo(this.proyectName).subscribe((data: any) => {
      console.log(data);
      this.repo = data;
    });
  }
  getCommits(){
    this.proyect.getCommits(this.proyectName).subscribe((data: any) => {
      console.log(data);
      this.commits = data;

    });
  }

}
