import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { TiersComponent } from './tiers/tiers.component';
import * as tiersPage from './+state/tiers-page.reducer';

const routes: Routes = [
  {
    path: 'tiers',
    component: TiersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiersRoutingModule { }
