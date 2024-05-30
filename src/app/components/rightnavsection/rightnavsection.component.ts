import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rightnavsection',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rightnavsection.component.html',
  styleUrl: './rightnavsection.component.css'
})
export class RightnavsectionComponent {
  @Input() nav_list: any;
}
