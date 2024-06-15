import { Routes } from '@angular/router';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';

export const routes: Routes = [
    {path: "developer/quickstart", component:QuickstartComponent},
    {path: '',   redirectTo: '/developer/quickstart', pathMatch: 'full' }
  ];
