import { Component, OnInit } from '@angular/core';
import { RightnavsectionComponent } from '../../../components/rightnavsection/rightnavsection.component';


@Component({
  selector: 'app-alliance-partner',
  standalone: true,
  imports: [RightnavsectionComponent],
  templateUrl: './alliance-partner.component.html',
  styleUrl: './alliance-partner.component.css'
})
export class AlliancePartnerComponent implements OnInit {

  nav_list : any = []
  
  ngOnInit(){
    this.nav_list =  [{name:'Application Submit Request'},
    {name:'Merchant Inquery'},{name:'Onboarding login Request'},{name:'Service Request creation'},]
  }
}
