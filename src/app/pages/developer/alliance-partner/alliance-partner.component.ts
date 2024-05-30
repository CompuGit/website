import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../../components/main/main.component';
import { RightnavsectionComponent } from '../../../components/rightnavsection/rightnavsection.component';
import { TabsComponent } from '../../../components/tabs/tabs.component';

@Component({
  selector: 'app-alliance-partner',
  standalone: true,
  imports: [MainComponent,RightnavsectionComponent, TabsComponent],
  templateUrl: './alliance-partner.component.html',
  styleUrl: './alliance-partner.component.css'
})
export class AlliancePartnerComponent implements OnInit {

  nav_tabs : any = []
  
  ngOnInit(){
    this.nav_tabs = [
      {name:'Application Submit Request', state:'active'},
      {name:'Merchant Inquiry'},
      {name:'Onboarding Login Request'},
      {name:'Service Request creation'},
      {name:'Service Request Inquiry'},
    ]
  }
}
