import { Reseau } from '../reseau';
import { DemandeService } from './../demande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseau',
  templateUrl: './reseau.component.html',
  styleUrl: './reseau.component.css'
})
export class ReseauComponent implements OnInit {
  reseau!:Reseau[];
  constructor(private demandeService:DemandeService) { }
  ngOnInit(): void {
   this.getAll();
  }
  public getAll(){
    this.demandeService.getAllreseau().subscribe(data=>this.reseau=data)
   }

}
