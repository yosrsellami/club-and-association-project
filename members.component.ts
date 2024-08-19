import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {


  constructor(public membreservice: MemberService) {}
 members!:Member[

 ];
 public getAll(){
  this.membreservice.getAllmembers().subscribe(data=>this.members=data)
 }
 UpdateMember(id: number, updatedMember: Member): void {
  this.membreservice.updateMember(id, updatedMember).subscribe(
    response => {
      console.log('Member updated', response);
      this.getAll();  // Refresh the list after updating
    },
    error => {
      console.error('Error updating member', error);
    }
  );
}
  ngOnInit(): void {
    this.getAll();



  }
}
