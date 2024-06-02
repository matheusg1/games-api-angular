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

  carouselInnerHtml : any;
  lancamentos : any;
  bemAvaliados : any;
  constructor(public gamesApiService: GamesApiService, private router: Router) { }  

  ngOnInit() {
    
    // this.gamesApiService.getSearchMovies().subscribe(
    //   (result: any) => {
    //     console.log('result')
    //     console.log(result)
    //     this.lancamentos = result
        
    //   })

    // this.gamesApiService.getJogos(1, "released").subscribe(
    //   (result: any) => {
    //     console.log('result')
    //     console.log(result)
    //     this.lancamentos = result
        
    //   })

    this.gamesApiService.getJogos(1, "-rating, released").subscribe(
      (result: any) => {
        this.bemAvaliados = result
        
      })      
  }


  // goToDetails(id: number) {
  //   this.navCtrl.navigateForward(`/detalhes/${id}`);
  // }

  goToDetails(id: number) {
    this.router.navigate(['/detalhes', id], {
      queryParams: {
        param1: 'value1',
        param2: 'value2'
      }
    });
  }
}
