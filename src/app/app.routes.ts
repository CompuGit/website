import { Routes } from '@angular/router';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';
import { AlliancePartnerComponent } from './pages/developer/alliance-partner/alliance-partner.component';
import { SwitchingComponent } from './pages/developer/switching/switching.component';
import { TransactionComponent } from './pages/developer/transaction/transaction.component';
import { SelfserviceComponent } from './pages/developer/selfservice/selfservice.component';

export const routes: Routes = [
    {path: "developer/quickstart", component:QuickstartComponent},
    {path: "developer/partners", component:AlliancePartnerComponent},
    {path: "developer/switching", component:SwitchingComponent},
    {path: "developer/transaction", component:TransactionComponent},
    {path: "developer/selfservice", component:SelfserviceComponent},
    {path: '',   redirectTo: '/developer/quickstart', pathMatch: 'full' }
  ];
