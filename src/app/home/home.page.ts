import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { catchError, of, throwError } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  // styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('scrollableBemAvaliados') scrollableBemAvaliados!: ElementRef;
  @ViewChild('scrollableIndie') scrollableIndie!: ElementRef;
  @ViewChild('scrollableRpg') scrollableRpg!: ElementRef;

  carouselInnerHtml: any;
  lancamentos: any;
  lancamentosLoad: boolean = true;
  bemAvaliados: any;
  bemAvaliadosLoad: boolean = true;
  jogosRpg: any;
  rpgLoad: boolean = true;
  jogosIndie: any;
  indieLoad: boolean = true;
  mensagemDebug : string = "";

  scrollWidth : number = 0;
  scrollLeft : number = 0;
  clientWidth : number = 0;

  constructor(public gamesApiService: GamesApiService, private router: Router) { }

  ngAfterViewInit() {
    this.HandleScrollBemAvaliados();
    this.HandleScrollJogosIndie();
    this.HandleScrollJogosRpg();
  }

  HandleScrollBemAvaliados(){
    console.log('setou bem avaliados 2')
    sessionStorage.setItem('bem-avaliados-pagina', '2');

    let paginaBemAvaliados = Number(sessionStorage.getItem('bem-avaliados-pagina'));

    this.scrollableBemAvaliados.nativeElement.addEventListener('scroll', (event: CustomEvent) => {
      let element = this.scrollableBemAvaliados.nativeElement;
      let fimScroll = Math.abs(element.scrollWidth - element.scrollLeft - element.clientWidth) <= 1;
      //let momentoLoad = element.clientWidth * 2;
      this.scrollWidth = element.scrollWidth ;
      this.scrollLeft = element.scrollLeft;
      this.clientWidth = element.clientWidth;

      let childCount = this.scrollableBemAvaliados.nativeElement.children.length;
      console.log('childCount' + childCount)

      if (fimScroll) {
        this.mensagemDebug += "chegou ao fim do scroll"
        console.log(element.scrollWidth - element.scrollLeft)
        this.LoadMoreBemAvaliados(paginaBemAvaliados);
        sessionStorage.setItem('bem-avaliados-pagina', paginaBemAvaliados.toString());
        paginaBemAvaliados++;        
      }  
    });
  }

  HandleScrollJogosIndie(){
    sessionStorage.setItem('indie-pagina', '2');

    let paginaIndie = Number(sessionStorage.getItem('indie-pagina'));

    this.scrollableIndie.nativeElement.addEventListener('scroll', (event: CustomEvent) => {
      let element = this.scrollableIndie.nativeElement;
      let fimScroll = element.scrollWidth - element.scrollLeft === element.clientWidth;
      //let momentoLoad = element.clientWidth * 2;

      if (fimScroll) {
        console.log(element.scrollWidth - element.scrollLeft)
        this.LoadMoreIndie(paginaIndie);
        sessionStorage.setItem('indie-pagina', paginaIndie.toString());
        paginaIndie++;        
      }  
    });
  }

  HandleScrollJogosRpg(){
    sessionStorage.setItem('rpg-pagina', '2');

    let paginaRpg = Number(sessionStorage.getItem('rpg-pagina'));

    this.scrollableRpg.nativeElement.addEventListener('scroll', (event: CustomEvent) => {
      let element = this.scrollableRpg.nativeElement;
      let fimScroll = element.scrollWidth - element.scrollLeft === element.clientWidth;
      //let momentoLoad = element.clientWidth * 2;
      console.log('rolando scroll rpg')
      if (fimScroll) {
        console.log(element.scrollWidth - element.scrollLeft)
        this.LoadMoreRpg(paginaRpg);
        sessionStorage.setItem('rpg-pagina', paginaRpg.toString());
        paginaRpg++;        
      }  
    });
  }

  ngOnInit() {    
    this.gamesApiService.getJogos(1, "-rating, released").pipe(
      catchError(error => {
        //return of([]);
        return throwError(error)
      })
    ).subscribe(
      (result: any) => {
        this.bemAvaliadosLoad = false;        
        this.bemAvaliados = result;
      }
    )

    // this.gamesApiService.getJogosGenero("role-playing-games-rpg", 1).pipe(
    //   catchError(error => {
    //     //return of([]);
    //     console.log('abcd ')
    //     return throwError(error)
    //   })
    // ).subscribe(
    //   (result: any) => {
    //     this.rpgLoad = false;        
    //     this.jogosRpg = result;
    //   }
    // )

    // this.gamesApiService.getJogosGenero("indie", 1).pipe(
    //   catchError(error => {
    //     //return of([]);        
    //     return throwError(error)
    //   })
    // ).subscribe(
    //   (result: any) => {
    //     console.log('deu indie false')
    //     this.indieLoad = false;        
    //     this.jogosIndie = result;
    //   }
    // )
  }

  LoadMoreBemAvaliados(pagina: number) {
    this.gamesApiService.getJogos(pagina, "-rating, released").subscribe(
      (result: any) => {
        let resultados = result?.results
        resultados.forEach((jogo: any) => {
          this.bemAvaliados.results.push(jogo);
        });
      })
    this.mensagemDebug += "fez a chamada"
  }

  LoadMoreIndie(pagina: number) {
    this.gamesApiService.getJogosGenero("indie", pagina).subscribe(
      (result: any) => {
        let resultados = result?.results
        resultados.forEach((jogo: any) => {
          this.jogosIndie.results.push(jogo);
        });
      })
  }

  LoadMoreRpg(pagina: number) {
    this.gamesApiService.getJogosGenero("role-playing-games-rpg", pagina).subscribe(
      (result: any) => {
        let resultados = result?.results
        resultados.forEach((jogo: any) => {
          this.jogosRpg.results.push(jogo);
        });
      })
  }

  goToDetails(id: number) {
    this.router.navigate(['/detalhes', id])
  }
}
