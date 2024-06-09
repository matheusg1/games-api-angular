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
import { AuthGuard } from './auth-guard.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { CadastroComponent } from './cadastro/cadastro.component';

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
    path: 'cadastro',
    component: CadastroComponent
  },  
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'integrantes',
    component: IntegrantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhes/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    MenuModule,
    HomeModule,
    IntegrantesModule,
    DetailsModule,
    LoginModule,
    CadastroModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
