import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'edit',
    component: EditComponent

  },
  {
    path: 'edit-password',
    component: PasswordComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
