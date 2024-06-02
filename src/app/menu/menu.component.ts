import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {}
  
  async navigate(link: string) {
    await this.menu.close();
    this.router.navigateByUrl(link);
  }
}
