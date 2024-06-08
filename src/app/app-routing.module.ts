import { NgModule } from '@angular/core';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { DetailsModule } from './details/details.module';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
    path: 'teste21334',
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
    MenuModule,
    HomeModule,    
    IntegrantesModule,    
    DetailsModule,
    LoginModule
  ],  
  exports: [RouterModule],
})
export class AppRoutingModule { }
