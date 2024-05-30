import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { IntegrantesComponent } from './integrantes/integrantes.component';

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
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
