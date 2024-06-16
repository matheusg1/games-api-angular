import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    FontAwesomeModule 
  ],
  declarations: [FavoritosComponent],
})
export class FavoritosModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStar,
      farStar
    );
  }
 }
