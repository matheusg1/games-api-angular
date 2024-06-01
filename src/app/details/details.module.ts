import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from '../details/details.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule
  ],
  declarations: [DetailsComponent],  
})
export class DetailsModule { }
