import { Component, OnInit } from '@angular/core';
import { DemandeA } from '../demande-a';
import { DemandeService } from '../demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-a',
  templateUrl: './demande-a.component.html',
  styleUrls: ['./demande-a.component.css']
})
export class DemandeAComponent implements OnInit {
  demandes: DemandeA[] = [];

  constructor(private demandeService: DemandeService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.demandeService.getAlldemandeA().subscribe(data => this.demandes = data);
  }

  public valider(demande: DemandeA) {
    alert("la demande a ètè validée");
    this.demandeService.validerdemande(demande).subscribe(
      (response) => {
        console.log('Validation successful:', response);
        this.supprimerDemande(demande.id);
      },
      (error) => {
        console.error('Error occurred while validating data:', error);
      }
    );
  }
  public supprimerDemande(id: number) {

      this.demandeService.supprimerDemande(id).subscribe(
        () => {
          console.log('Demande supprimée avec succès');
          // Rechargez la liste des demandes après la suppression
          this.getAll();
          alert("la demande a ètè supprimée")
        },
        (error) => {
          console.error('Erreur lors de la suppression de la demande :', error);
        }
      );
    }
  }





