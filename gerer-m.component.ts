

import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerer-m',
  templateUrl: './gerer-m.component.html',
  styleUrls: ['./gerer-m.component.css']
})
export class GererMComponent implements OnInit {
  UpdatedMember!: Member;
  members: Member[] = [];
  id!: number

  constructor(public membreservice: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.membreservice.getAllmembers().subscribe(data => this.members = data);
  }

  UpdateMember(id: number, updatedMember: Member): void {
    this.membreservice.updateMember(id, updatedMember).subscribe(
      response => {
        console.log('Member updated', response);
        this.getAll();
      },
      error => {
        console.error('Error updating member', error);
      }
    );
  }

  public supprimer(id:number) {

    this.membreservice.supprimermembre(id).subscribe(
      () => {
        console.log('membre supprimée avec succès');

        this.getAll();
        alert("membre a ètè supprimée")
      },
      (error) => {
        alert("erreur");
      }
    );
  }
}
