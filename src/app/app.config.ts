import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule



import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyD0iKGNhTflF_lNhbDnPcXFOymMk2iw4uA",
  authDomain: "sparte-angular-teste.firebaseapp.com",
  projectId: "sparte-angular-teste",
  storageBucket: "sparte-angular-teste.appspot.com",
  messagingSenderId: "512410958567",
  appId: "1:512410958567:web:e5f9d3ff14d69bbc8dc042"
}; //FIREBASE PROJETO TESTE (caso precise testar algo pode mudar o que está entre {} para o do seu projeto.)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ]), provideAnimationsAsync(),
], 
};






