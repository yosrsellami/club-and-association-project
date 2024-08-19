import { MemberService } from '../member.service';
import { Club } from './../club';
import { Component } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {
  id!: string;



  constructor(public membreservice: MemberService) {}
 clubs!:Club[

 ];
 selectedGenre: string = '';
 selectedetabli:string="";
 public getAll(){
  this.membreservice.getAllclubs().subscribe(data=>this.clubs=data)
 }
  ngOnInit(): void {
    this.getAll();



  }
  toggleClubInfo(club: Club): void {
    club.showInfo = !club.showInfo;
  }
  getClubsByGenre(genre: string): void {
    this.membreservice.getClubsByGenre(genre).subscribe(
      (data: any[]) => {
        this.clubs = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des clubs:', error);
      }
    );
  }

  onGenreChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const genre = target.value;
    this.selectedGenre = genre;
    if (genre === '') {
      this.getAll();
    } else {
      this.getClubsByGenre(genre);
    }
  }
  getClubsByetabli(nomduetablissement: string): void {
    this.membreservice.getClubsByEtablissement(nomduetablissement).subscribe(
      (data: any[]) => {
        this.clubs = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des clubs:', error);
      }
    );
  }

  onetabliChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const nomduetablissement = target.value;
    this.selectedetabli = nomduetablissement;
    if (nomduetablissement === '') {
      this.getAll();
    } else {
      this.getClubsByetabli(nomduetablissement);
    }
  }
}
