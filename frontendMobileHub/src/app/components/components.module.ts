import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../shared/nav/nav.component';
import { UpperBarComponent } from '../shared/upper-bar/upper-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavComponent, UpperBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NavComponent, UpperBarComponent]
})
export class ComponentsModule { }
