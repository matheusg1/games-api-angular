import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
  ],
  declarations: [FavoritosComponent],
})
export class FavoritosModule { }
