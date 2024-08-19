import { MemberService } from '../member.service';
import { Club } from './../club';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sclub',
  templateUrl: './sclub.component.html',
  styleUrl: './sclub.component.css'
})
export class SclubComponent implements OnInit {
  clubs: Club[]=[]
  nomduetablissement: string = ''; // Set this to the logged-in user's establishment name

  constructor(private membreservice: MemberService) { }

  ngOnInit(): void {
    this.fetchClubs();
  }

  fetchClubs(): void {
    this.membreservice.getClubsByEtablissement(this.nomduetablissement)
      .subscribe(clubs => this.clubs = clubs);
  }
}
