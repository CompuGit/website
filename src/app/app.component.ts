import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';
import { CodeHighlightComponent } from './components/code-highlight/code-highlight.component';
import { OnPageNavigationComponent } from './components/on-page-navigation/on-page-navigation.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnPageNavigationComponent,
    TopnavComponent, QuickstartComponent,
    CommonModule, CodeHighlightComponent, SidebarNavComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Toucan API';
}
