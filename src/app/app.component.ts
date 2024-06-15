import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';
import { AlliancePartnerComponent } from './pages/developer/alliance-partner/alliance-partner.component';
import { SwitchingComponent } from './pages/developer/switching/switching.component';
import { TransactionComponent } from './pages/developer/transaction/transaction.component';
import { SelfserviceComponent } from './pages/developer/selfservice/selfservice.component';
import { CodeHighlightComponent } from './components/code-highlight/code-highlight.component';
import { OnPageNavigationComponent } from './components/on-page-navigation/on-page-navigation.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnPageNavigationComponent,
    TopnavComponent, QuickstartComponent, AlliancePartnerComponent, 
    SwitchingComponent, TransactionComponent, SelfserviceComponent, 
    CommonModule, CodeHighlightComponent, SidebarNavComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
