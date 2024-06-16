import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import { MenuModule } from '../menu/menu.module';
import { RouterLink } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faStar } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModule,
    FontAwesomeModule 
  ],
  declarations: [
    HomePage    
  ]
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStar,
      farStar
    );
  }
 }