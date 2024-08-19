import { Component } from '@angular/core';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';
import { DemandeA } from '../demande-a';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {

  demandeA: DemandeA = {id:0, nom: '', localites: '', genre: '',domaine: ''   };
  constructor(private demandeservice: DemandeService,private router: Router) { }

  onSubmit(demandeAForm: NgForm): void {
    if (demandeAForm.valid) {
      // Call your service to save the member
      this.demandeservice.createdemandeA(this.demandeA).subscribe(
        (response) => {
          alert("demande envoyèe")
          demandeAForm.reset();}
      );
}
  }
}
