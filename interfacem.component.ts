import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interfacem',
  templateUrl: './interfacem.component.html',
  styleUrl: './interfacem.component.css'
})
export class InterfacemComponent {

  member!: Member;
  memberId!: number;

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    const nom = this.route.snapshot.paramMap.get('nom');
    if (nom) {
      this.memberService.getUser(nom).subscribe(user => this.member = this.member);
    }
  }
}




