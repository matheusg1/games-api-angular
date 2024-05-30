import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  // styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  carouselInnerHtml : any;
  constructor(public gamesApiService: GamesApiService, private router: Router) { }  

  ngOnInit() {
    this.gamesApiService.getSearchMovies().subscribe(
      (result: any) => {
        this.carouselInnerHtml = result
        console.log('nome do jogo');
        console.log(this.carouselInnerHtml.results);
        
      })
  }
}
