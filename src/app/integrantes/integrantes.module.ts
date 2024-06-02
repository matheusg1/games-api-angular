import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrantesComponent } from './integrantes.component';
import { MenuModule } from '../menu/menu.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule    
  ],
  declarations: [
    IntegrantesComponent
  ],
})
export class IntegrantesModule { }
