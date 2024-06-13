import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RightnavsectionComponent } from './components/rightnavsection/rightnavsection.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';
import { AlliancePartnerComponent } from './pages/developer/alliance-partner/alliance-partner.component';
import { SwitchingComponent } from './pages/developer/switching/switching.component';
import { TransactionComponent } from './pages/developer/transaction/transaction.component';
import { SelfserviceComponent } from './pages/developer/selfservice/selfservice.component';
import { CommonModule } from '@angular/common';
import { CodeHighlightComponent } from './components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, RightnavsectionComponent, 
    TopnavComponent, QuickstartComponent, AlliancePartnerComponent, 
    SwitchingComponent, TransactionComponent, SelfserviceComponent, 
    CommonModule, CodeHighlightComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// @NgModule({
//   declarations: [
//     JsonCodeSinppetComponent
//   ],
//   imports: [RouterOutlet, SidenavComponent, RightnavsectionComponent, 
//     TopnavComponent, QuickstartComponent, AlliancePartnerComponent, 
//     SwitchingComponent, TransactionComponent, SelfserviceComponent, 
//     CommonModule],
// })
export class AppComponent {
  title = 'website';
}
