import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss'],
})
export class IntegrantesComponent  implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {}
}
