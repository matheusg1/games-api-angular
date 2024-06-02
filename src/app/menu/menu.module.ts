import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterLink,   
  ],
  exports:[MenuComponent],
  declarations: [
    MenuComponent
  ],
})
export class MenuModule { }
