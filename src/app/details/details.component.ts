import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesApiService } from '../services/games-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id?: number;
  queryParams: any;
  jogo: any;
  screenshots: any;

  constructor(public gamesApiService: GamesApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let idd = this.route.snapshot.paramMap.get('id');

    if (idd) {
      this.id = parseInt(idd)

      this.route.queryParams.subscribe(params => {
        this.queryParams = params;
      });

      this.gamesApiService.getJogo(this.id).subscribe(
        (result: any) => {
          this.jogo = result

        })

        this.gamesApiService.getScreenshots(this.id).subscribe(
          (result: any) => {
            this.screenshots = result            

          })
    }
  }
}
