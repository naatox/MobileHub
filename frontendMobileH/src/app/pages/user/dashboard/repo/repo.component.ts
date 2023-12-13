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
  commitsQty: number = 0;

  /**
   * Constructor del componente.
   * @param proyect Servicio para obtener detalles de proyectos.
   * @param route Servicio para acceder a los parámetros de la URL.
   */
  constructor(private proyect: ProyectsService, private route: ActivatedRoute) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit() {
    this.getRepo();
    this.getCommits();
  }

  /**
   * Método que obtiene la información del repositorio.
   */
  getRepo(){
    this.proyectName= this.route.snapshot.params['name'];
    this.proyect.getRepo(this.proyectName).subscribe((data: any) => {
      data.updated_at = new Date(data.created_at).toLocaleDateString();
      this.repo = data;
    });
  }

  /**
   * Método que obtiene la lista de commits del repositorio.
   */
  getCommits(){
    this.proyect.getCommits(this.proyectName).subscribe((data: any) => {
      this.commits = data;
      this.commitsQty = this.commits.length;
    });
  }

}
