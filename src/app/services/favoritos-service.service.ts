import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  userUid: any;
  listaFavoritos: any

  constructor(private afAuth: AngularFireAuth) {
    this.userUid = localStorage.getItem('user-uid');
  }

  addFavorito(id: number) {
    let favoritos = localStorage.getItem(this.userUid + '-favoritos');
    let listaDeFavoritos = [];

    if (favoritos) {
      listaDeFavoritos = JSON.parse(favoritos);
    }

    if (!listaDeFavoritos.includes(id)) {
      listaDeFavoritos.push(id);
      localStorage.setItem(this.userUid + '-favoritos', JSON.stringify(listaDeFavoritos));
    }
  }

  removeFavorito(id: number) {
    let favoritos = localStorage.getItem(this.userUid + '-favoritos');
    if (favoritos) {
      let listaDeFavoritos = JSON.parse(favoritos);
      const index = listaDeFavoritos.indexOf(id);
      if (index > -1) {
        listaDeFavoritos.splice(index, 1);
        localStorage.setItem(this.userUid + '-favoritos', JSON.stringify(listaDeFavoritos));
      }
    }
  }

  getFavoritos() {
    let favoritos = localStorage.getItem(this.userUid + '-favoritos');
    if (favoritos) {
      this.listaFavoritos = JSON.parse(favoritos);
    } else {
      this.listaFavoritos = [];
    }
    return this.listaFavoritos;
  }

  isFavorito(id: number): boolean {
    let favoritos = localStorage.getItem(this.userUid + '-favoritos');
    if (favoritos) {
      let listaDeFavoritos = JSON.parse(favoritos);
      return listaDeFavoritos.includes(id);
    }
    return false;
  }
}
