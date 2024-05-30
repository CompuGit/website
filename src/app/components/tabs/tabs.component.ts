import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() nav_tabs: any;
}
