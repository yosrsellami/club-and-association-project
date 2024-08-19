import { Component } from '@angular/core';
import { Reseau } from '../reseau';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  reseau!:Reseau[];
  constructor(private demandeService:DemandeService) { }
  ngOnInit(): void {
   this.getAll();
  }
  public getAll(){
    this.demandeService.getAllreseau().subscribe(data=>this.reseau=data)
   }
}
