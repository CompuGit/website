import { Component, Input } from '@angular/core';
import { OnPageNavigationComponent } from '../on-page-navigation/on-page-navigation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OnPageNavigationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() anchors: any = [];
}
