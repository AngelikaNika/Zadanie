import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DancesRoutingModule } from './dances-routing.module';
import { RouterModule } from '@angular/router';
import { DancesOverviewComponent } from './components/dance-overview/dances-overview.component';
import { DanceDetailsComponent } from './components/dance-details/dance-details.component';
import { DanceCardComponent } from './components/dance-overview/dance-card/dance-card.component';
import { DancePanelComponent } from './components/dance-overview/dance-panel/dance-panel.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  imports: [
    CommonModule,
    DancesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
      DancesOverviewComponent, DanceDetailsComponent, DanceCardComponent, DancePanelComponent, FormComponent
    ],
  exports: []
})
export class DancesModule { }
