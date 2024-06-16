import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { catchError, throwError } from 'rxjs';
import { FavoritosService } from '../services/favoritos-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
})
export class FavoritosComponent  implements OnInit {
  favoritos: any;
  constructor(public gamesapiservice: GamesApiService, public favoritosService: FavoritosService, public router: Router) { }

  ngOnInit() {
    //GamesApiService.
    let favoritos = this.favoritosService.getFavoritos();
    let favoritosString = favoritos.join(',')    
    console.log('favoritosString')
    console.log(favoritosString)

    this.gamesapiservice.getJogosById(favoritosString).pipe(
      catchError(error => {
        //return of([]);
        return throwError(error)
      })
    ).subscribe(
      (result: any) => {
        //this.bemAvaliadosLoad = false;
        this.favoritos = result;
      }
    )
  }

  goToDetails(id: number) {
    this.router.navigate(['/detalhes', id])
  }

  handleClickFavorito(id: number) {        
    if(this.favoritosService.isFavorito(id)){
        this.favoritosService.removeFavorito(id);
    }
    else{
      this.favoritosService.addFavorito(id);
    };
  }

}
