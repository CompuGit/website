import { Component, OnInit } from '@angular/core';
import { RightnavsectionComponent } from '../../../components/rightnavsection/rightnavsection.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-quickstart',
  standalone: true,
  imports: [RightnavsectionComponent, NgFor],
  templateUrl: './quickstart.component.html',
  styleUrl: './quickstart.component.css'
})
export class QuickstartComponent  implements OnInit{

  nav_list : any = []
  
  ngOnInit(){
    this.nav_list = [{name:'Get Started'},{name:'Sandbox'},{name:'Run In Postman'},{name:'Authentication'},]
  }
}
