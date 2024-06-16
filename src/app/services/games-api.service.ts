import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface listaJogosResult {
    count: number;
    results: any[];
    previous?: string ,
    next?: string,
    seo_title: string;
}

export interface jogoResult {
    id: number;
    slug: any[];
    description: string ,
    released: string,
    background_image: string;
    background_image_additional: string;
    rating: string;
}

export interface imagemResult {
    count: number,
    id: number;
    results: any[],
}

@Injectable({
    providedIn: 'root'
})
export class GamesApiService {
    constructor(private http: HttpClient) { }

    getJogos(pagina: number, ordenacao: string): Observable<listaJogosResult> {
        return this.http.get<listaJogosResult>(            
            //released
            //rating
            `https://api.rawg.io/api/games?key=6a167e0c74be43c6872cdbd3091db111&page_size=10&page=${pagina}&ordering=${ordenacao}`
        )                     
    }

    getJogo(id?: number): Observable<jogoResult> {
        return this.http.get<jogoResult>(            
            `https://api.rawg.io/api/games/${id}?key=6a167e0c74be43c6872cdbd3091db111`
        );                      
    }

    getScreenshots(id: number): Observable<imagemResult> {
        return this.http.get<imagemResult>(            
            // `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
            `https://api.rawg.io/api/games/${id}/screenshots?key=6a167e0c74be43c6872cdbd3091db111`
        );
    }

    getBemAvaliados(pagina: number): Observable<listaJogosResult> {
        return this.http.get<listaJogosResult>(            
            // `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
            `https://api.rawg.io/api/games?key=6a167e0c74be43c6872cdbd3091db111&page_size=10&page=${pagina}&ordering=-rating,released`
        );
    }

    getJogosGenero(genero: string, pagina: number): Observable<listaJogosResult> {
        return this.http.get<listaJogosResult>(            
            // `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=pt-BR&api_key=dadc0c005ef5db978255b26bb089a811&page=${page}`
            `https://api.rawg.io/api/games?key=6a167e0c74be43c6872cdbd3091db111&page_size=10&page=${pagina}&genres=${genero}&ordering=-rating,released`            
        );
    }

    getJogosById(listaIds: any): Observable<listaJogosResult> {

        return this.http.get<listaJogosResult>(                        
            `https://api.rawg.io/api/games?key=6a167e0c74be43c6872cdbd3091db111&id=${listaIds}&ordering=-rating,released`            
        );
    }
}