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
  mensagemDebug: string = "";
  mostraCardLoading = true;

  scrollWidth: number = 0;
  scrollLeft: number = 0;
  clientWidth: number = 0;

  constructor(public gamesApiService: GamesApiService, private router: Router) { }

  ngAfterViewInit() {
    this.HandleScroll(this.scrollableBemAvaliados, 'bem-avaliados-pagina');
    this.HandleScroll(this.scrollableIndie, 'indie-pagina');
    this.HandleScroll(this.scrollableRpg, 'rpg-pagina');
  }

  HandleScroll(scrollElement: ElementRef, storageItem: string) {
    sessionStorage.setItem(storageItem, '2');

    let paginaAtual = Number(sessionStorage.getItem(storageItem));

    scrollElement.nativeElement.addEventListener('scroll', (event: CustomEvent) => {
      let element = scrollElement.nativeElement;
      let fimScroll = Math.abs(element.scrollWidth - element.scrollLeft - element.clientWidth) <= 1;
      this.scrollWidth = element.scrollWidth;
      this.scrollLeft = element.scrollLeft;
      this.clientWidth = element.clientWidth;

      if (fimScroll) {        
        if (storageItem == 'bem-avaliados-pagina') {
          this.LoadMoreBemAvaliados(paginaAtual)
        }
        else if (storageItem == 'indie-pagina') {
          this.LoadMoreIndie(paginaAtual);
        }
        else if (storageItem == 'rpg-pagina') {
          this.LoadMoreRpg(paginaAtual);
        }
        sessionStorage.setItem(storageItem, paginaAtual.toString());
        paginaAtual++;
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

    this.gamesApiService.getJogosGenero("role-playing-games-rpg", 1).pipe(
      catchError(error => {
        //return of([]);
        console.log('abcd ')
        return throwError(error)
      })
    ).subscribe(
      (result: any) => {
        this.rpgLoad = false;
        this.jogosRpg = result;
      }
    )

    this.gamesApiService.getJogosGenero("indie", 1).pipe(
      catchError(error => {
        //return of([]);        
        return throwError(error)
      })
    ).subscribe(
      (result: any) => {
        console.log('deu indie false')
        this.indieLoad = false;
        this.jogosIndie = result;
      }
    )
  }

  LoadMoreBemAvaliados(pagina: number) {
    this.gamesApiService.getJogos(pagina, "-rating, released").subscribe(
      (result: any) => {
        let resultados = result?.results
        resultados.forEach((jogo: any) => {
          this.bemAvaliados.results.push(jogo);
        });
      })
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

  criaCardLoading() {
    let ionCard = document.createElement('ion-card');
    ionCard.setAttribute('class', 'card');

    // Cria os elementos ion-skeleton-text e adiciona ao ion-card
    for (let i = 0; i < 5; i++) {
      let skeletonText = document.createElement('ion-skeleton-text');
      skeletonText.setAttribute('animated', 'true');
      skeletonText.setAttribute('class', 'skeleton-img');
      ionCard.appendChild(skeletonText);
    }

    // Cria o elemento ion-card-header e adiciona ao ion-card
    let cardHeader = document.createElement('ion-card-header');
    ionCard.appendChild(cardHeader);

    // Cria os elementos ion-skeleton-text e adiciona ao ion-card-header
    let skeletonTexto = document.createElement('ion-skeleton-text');
    skeletonTexto.setAttribute('animated', 'true');
    skeletonTexto.setAttribute('class', 'skeleton-texto');
    cardHeader.appendChild(skeletonTexto);

    let skeletonSubtexto1 = document.createElement('ion-skeleton-text');
    skeletonSubtexto1.setAttribute('animated', 'true');
    skeletonSubtexto1.setAttribute('class', 'skeleton-subtexto1');
    cardHeader.appendChild(skeletonSubtexto1);

    let skeletonSubtexto2 = document.createElement('ion-skeleton-text');
    skeletonSubtexto2.setAttribute('animated', 'true');
    skeletonSubtexto2.setAttribute('class', 'skeleton-subtexto2');
    cardHeader.appendChild(skeletonSubtexto2);
    return ionCard;

  }
}
