import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  // styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  carouselInnerHtml: any;
  lancamentos: any;
  bemAvaliados: any;
  jogosRpg: any;
  jogosIndie: any;
  constructor(public gamesApiService: GamesApiService, private router: Router) { }

  ngOnInit() {
    this.gamesApiService.getJogos(1, "-rating, released").subscribe(
      (result: any) => {
        this.bemAvaliados = result

      })

    this.gamesApiService.getJogosGenero("role-playing-games-rpg", 1).subscribe(
      (result: any) => {
        this.jogosRpg = result
      })

    this.gamesApiService.getJogosGenero("indie", 1).subscribe(
      (result: any) => {
        this.jogosIndie = result
      })
  }


  // goToDetails(id: number) {
  //   this.navCtrl.navigateForward(`/detalhes/${id}`);
  // }

  goToDetails(id: number) {
    this.router.navigate(['/detalhes', id])
  }
}
