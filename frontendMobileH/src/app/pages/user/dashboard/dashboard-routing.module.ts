import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { RepoComponent } from './repo/repo.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path:'repo/:name',
    component: RepoComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
