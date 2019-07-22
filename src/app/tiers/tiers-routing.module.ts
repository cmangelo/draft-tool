import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TiersComponent } from './tiers/tiers.component';

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
