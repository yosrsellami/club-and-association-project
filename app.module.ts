import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClubComponent } from './club/club.component';
import { CreationComponent } from './creation/creation.component';
import { DemandeComponent } from './demande/demande.component';
import { IntegrationComponent } from './integration/integration.component';
import { DemandeAComponent } from './demande-a/demande-a.component';
import { ReseauComponent } from './reseau/reseau.component';
import { LoginCComponent } from './login-c/login-c.component';
import { SignupcComponent } from './signupc/signupc.component';
import { SignupaComponent } from './signupa/signupa.component';
import { LoginAComponent } from './logina/logina.component';
import { InterfacemComponent } from './interfacem/interfacem.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { LoginSComponent } from './login-s/login-s.component';
import { AdminComponent } from './admin/admin.component';
import { InterfaceSComponent } from './interface-s/interface-s.component';
import { SclubComponent } from './sclub/sclub.component';
import { GererMComponent } from './gerer-m/gerer-m.component';
import { MembersComponent } from './members/members.component';
import { ClubinterfaceComponent } from './clubinterface/clubinterface.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ClubComponent,
    CreationComponent,
    DemandeComponent,
    IntegrationComponent,
    DemandeAComponent,
    ReseauComponent,
    LoginCComponent,
    SignupcComponent,
    SignupaComponent,
    LoginAComponent,
    InterfacemComponent,
    SecretaireComponent,
    LoginSComponent,
    AdminComponent,
    InterfaceSComponent,
    SclubComponent,
    GererMComponent,
    MembersComponent,
    ClubinterfaceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule,FormsModule,HttpClientModule, FontAwesomeModule,
    ReactiveFormsModule


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
