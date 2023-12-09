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
    this.proyects.getRepos().subscribe((data: any) => {
      this.repos = data;
    });
  }

  /**
   * Navega a la página de detalles del repositorio seleccionado.
   * @param name Nombre del repositorio seleccionado.
   */
 repo(name: string){
  this.router.navigate(['user/dashboard/repo', name]);


 }
}
