import { Component } from '@angular/core';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.css'
})
export class CreationComponent {
  demande: Demande = {  id:0,nom: '', nomduetablissement: '', genre: '',president: '' , nommembreA: '' ,nommembreB: '' ,description: '',activites: ''  };
  constructor(private demandeservice: DemandeService,private router: Router) { }

  onSubmit(demandeForm: NgForm): void {
    if (demandeForm.valid) {

      this.demandeservice.createdemande(this.demande).subscribe(
        (response) => {
           alert("demande envoyèe");
          this.router.navigate(['/home']);

          demandeForm.reset();}

      );
}
  }
}
