import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



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
    {path: 'registro', component: RegistroComponent},
    {path: 'sobrenos', component: SobrenosComponent},
    {path: 'aprender', component: AprenderComponent},
    {path:'arts', component: ArtsComponent},
    {path: 'inspiracao', component: InspiracaoComponent},
    




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
