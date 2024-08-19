import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Club } from '../club';

@Component({
  selector: 'app-interface-s',
  templateUrl: './interface-s.component.html',
  styleUrls: ['./interface-s.component.css']
})
export class InterfaceSComponent implements OnInit {
  clubs: Club[] = [];
  nomduetablissement: string = '';

  constructor(private membreservice: MemberService) {}

  ngOnInit(): void {}

  getClubsByEtablissement(nomduetablissement: string | null) {
    if (this.nomduetablissement !== null) {

      this.membreservice.getClubsByEtablissement(this.nomduetablissement).subscribe(
        response => {
          this.clubs = response;
        },
        error => {
          console.log('Erreur lors de la récupération des clubs:', error);
        }
      );
    }
  }
}
