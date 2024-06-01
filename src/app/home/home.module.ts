import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
//import { MenuComponent } from '../menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from '../menu/menu.component';
import { DetailsModule } from '../details/details.module';
import { DetailsComponent } from '../details/details.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //HomePageRoutingModule
    AppRoutingModule,      
    MenuModule  
  ],
  declarations: [
    HomePage    
  ]
})
export class HomePageModule { }