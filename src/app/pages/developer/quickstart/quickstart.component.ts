import { Component, OnInit } from '@angular/core';

import { MainComponent } from '../../../components/main/main.component';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  imports: [MainComponent,],
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.css'
})

export class QuickstartComponent  implements OnInit{

  nav_list : any = []
  
  ngOnInit(){
    this.nav_list = [{name:'Get Started'},{name:'Sandbox'},{name:'Run In Postman'},{name:'Authentication'},]
  }
}
