import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistrationFormComponent } from './usuario/registration-form/registration-form.component';

import { VenderCriptoMonedaComponent } from './CriptoMoneda/vender-cripto-moneda/vender-cripto-moneda.component';
import { ModuloPesosComponent } from './Inicio/modulo-pesos/modulo-pesos.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponent,
    VenderCriptoMonedaComponent,
    ModuloPesosComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
