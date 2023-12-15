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


  /**
   * Constructor del componente.
   * @param proyects Servicio para obtener detalles de los repositorios.
   * @param router Servicio de enrutamiento para navegar a otras páginas.
   */
  constructor(private proyects: ProyectsService, private router: Router) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(){
    this.getRepos();

  }

  /**
   * Navega a la página de detalles del repositorio seleccionado.
   * @param name Nombre del repositorio seleccionado.
   */
 repo(name: string){
  this.router.navigate(['user/dashboard/repo', name]);

 }


 getRepos(){

  this.proyects.getRepos().subscribe((data: any) => {
    data.forEach((element: any) => {
      this.proyects.getCommits(element.name).subscribe((commits: any) => {
        element.commitsQty = commits.length;
      });
    });

    this.repos = data.sort((a:any, b:any) => {
      const fechaA = new Date(a.updated_at);
      const fechaB = new Date(b.updated_at);

      return fechaB.getTime() - fechaA.getTime();
    });
  });

 }


 compareDate(a: any, b: any){
    if (a.created_at < b.created_at){
      return 1;
    }
    if (a.created_at > b.created_at){
      return -1;
    }
    return 0;
}
}
