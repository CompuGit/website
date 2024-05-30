import { Component } from '@angular/core';
import { RightnavsectionComponent } from '../rightnavsection/rightnavsection.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RightnavsectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() nav_list: any;
}
