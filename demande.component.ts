import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from './../demande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrl: './demande.component.css'
})
export class DemandeComponent implements OnInit {
  demande:Demande[]=[];
  constructor(private demandeservice:DemandeService,private router:Router){}
  ngOnInit(): void {
  this.getAll();
}
  public getAll(){
    this.demandeservice.getAlldemande().subscribe(data=>this.demande=data)
   }
   public validerclub(demande: Demande) {
    this.demandeservice.validerclub(demande).subscribe(
      (response) => {
        console.log('Validation successful:', response);
        alert("demande validée");
          this.supprimerclub(Number(demande.id));
        this.router.navigate(['/home']);

      },
      (error) => {
        console.error('Error occurred while validating data:', error);
      }
    );
  }
  public supprimerclub(id: Number) {

      this.demandeservice.supprimerclub(id).subscribe(
        () => {
          console.log('Demande supprimée avec succès');
          alert("demande supprimée")
          this.getAll();
        },
        (error) => {
          console.error('Erreur lors de la suppression de la demande :', error);
        }
      );
    }
  }


