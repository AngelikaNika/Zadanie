import { DanceCardComponent } from './components/dance-overview/dance-card/dance-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DancesOverviewComponent } from './components/dance-overview/dances-overview.component';
import { DanceDetailsComponent } from './components/dance-details/dance-details.component';
import { FormComponent } from './components/form/form.component';
import { LoginGuard } from '../core/guards/login.guard';



const routes: Routes = [
  {
    path: 'dances',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: DancesOverviewComponent },
      { path: 'details/:id', component: DanceDetailsComponent },
      { path: 'card/:id', component: DanceCardComponent },
      { path: 'add', component: FormComponent, canActivate: [LoginGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DancesRoutingModule { }
