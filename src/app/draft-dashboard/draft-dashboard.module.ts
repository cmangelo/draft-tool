import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';



@NgModule({
  declarations: [DashboardComponent, MyTeamComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashboardComponent]
})
export class DraftDashboardModule { }
