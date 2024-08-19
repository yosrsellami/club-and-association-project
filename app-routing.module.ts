import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ClubComponent } from './club/club.component';
import { CreationComponent } from './creation/creation.component';
import { DemandeComponent } from './demande/demande.component';
import { IntegrationComponent } from './integration/integration.component';
import { DemandeAComponent } from './demande-a/demande-a.component';
import { ReseauComponent } from './reseau/reseau.component';
import { SignupcComponent } from './signupc/signupc.component';
import { LoginCComponent } from './login-c/login-c.component';
import { SignupaComponent } from './signupa/signupa.component';
import { LoginAComponent } from './logina/logina.component';
import { InterfacemComponent } from './interfacem/interfacem.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { LoginSComponent } from './login-s/login-s.component';
import { AdminComponent } from './admin/admin.component';
import { InterfaceSComponent } from './interface-s/interface-s.component';
import { GererMComponent } from './gerer-m/gerer-m.component';
import { MembersComponent } from './members/members.component';
import { ClubinterfaceComponent } from './clubinterface/clubinterface.component';

const routes: Routes = [
  {path: "login", component:LoginComponent },
  { path: "signup", component:SignupComponent},
  { path: "home", component:HomeComponent},
  { path: "club", component:ClubComponent},
  { path: "creation", component:CreationComponent},
  { path: "demande", component:DemandeComponent},
  { path: "integration", component:IntegrationComponent},
  { path: "demandea", component:DemandeAComponent},
  { path: "reseau", component:ReseauComponent},
  { path: "presidentc", component:SignupcComponent},
  { path: "loginc", component:LoginCComponent},
  { path: "presidenta", component:SignupaComponent},
  { path: "logina", component:LoginAComponent},
  { path: "profilm", component:InterfacemComponent},
  { path: "signupS", component:SecretaireComponent},
  { path: "loginS", component:LoginSComponent},
  { path: "admin", component:AdminComponent},
  { path: "interfacem", component:InterfacemComponent},
  { path: "interfaceS", component:InterfaceSComponent},
  { path: "signupa", component:SignupaComponent},
  { path: "signupc", component:SignupcComponent},
  { path: "gerer", component:GererMComponent},
  { path: "members", component:MembersComponent},
  { path: "clubinterface", component:ClubinterfaceComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
