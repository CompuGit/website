import { Routes } from '@angular/router';
import { QuickstartComponent } from './pages/developer/quickstart/quickstart.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
    {path: "developer/quickstart", component:QuickstartComponent},
    {path: "testpage", component:TestPageComponent},
    {path: '',   redirectTo: '/developer/quickstart', pathMatch: 'full' }
  ];
