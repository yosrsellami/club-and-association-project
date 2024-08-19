import { Component } from '@angular/core';
import { Club } from '../club';

@Component({
  selector: 'app-clubinterface',
  templateUrl: './clubinterface.component.html',
  styleUrl: './clubinterface.component.css'
})
export class ClubinterfaceComponent {
club!:Club;

}
