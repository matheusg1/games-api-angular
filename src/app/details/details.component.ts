import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  id?: string | null;
  queryParams: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Pegar o parâmetro de rota
    this.id = this.route.snapshot.paramMap.get('id');

    // Pegar os parâmetros de consulta (query params)
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
      console.log(this.queryParams); // Aqui você pode ver todos os parâmetros de consulta
    });
  }
}
