import { Component, Input } from '@angular/core';
import { OnPageNavigationComponent } from '../on-page-navigation/on-page-navigation.component';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OnPageNavigationComponent, NgIf, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() anchors: any = [];
  @Input() hasOnPageAnchors: any = false;
}
