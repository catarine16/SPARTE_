import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



//  pages
import { MainscreenComponent } from './pages/mainscreen/mainscreen.component';
import { AprenderComponent } from './pages/aprender/aprender.component';
import { ArtsComponent } from './pages/arts/arts.component';
import { InspiracaoComponent } from './pages/inspiracao/inspiracao.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';


export const routes: Routes = [
    {path: '', component: MainscreenComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registrar', component: RegistroComponent},
    {path: 'sobrenos', component: SobrenosComponent},
    {path: 'aprender', component: AprenderComponent},
    {path:'artistas', component: ArtsComponent},
    {path: 'inspiração', component: InspiracaoComponent},
    




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }