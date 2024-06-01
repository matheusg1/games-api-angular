import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //HomePageRoutingModule
    AppRoutingModule,      
       
  ],
  exports:[MenuComponent],
  declarations: [
    MenuComponent
  ],
})
export class MenuModule { }
