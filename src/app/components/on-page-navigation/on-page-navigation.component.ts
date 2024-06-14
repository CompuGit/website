import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-on-page-navigation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './on-page-navigation.component.html',
  styleUrl: './on-page-navigation.component.css'
})
export class OnPageNavigationComponent {
  @Input() anchors: any = [];
}
