import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { DetailsComponent } from './details/details.component';
import { DetailsModule } from './details/details.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'integrantes',
    component: IntegrantesComponent
  },
  {
    path: 'detalhes/:id',
    component: DetailsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),    
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
