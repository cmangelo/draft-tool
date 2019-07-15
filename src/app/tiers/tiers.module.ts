import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { TierCardComponent } from './tier-card/tier-card.component';
import { TiersRoutingModule } from './tiers-routing.module';
import { TiersComponent } from './tiers/tiers.component';
import { PositionTabComponent } from './position-tab/position-tab.component';


@NgModule({
  declarations: [TiersComponent, TierCardComponent, PositionTabComponent],
  imports: [
    CommonModule,
    TiersRoutingModule,
    NgbTabsetModule
  ],
  exports: [TiersComponent, TierCardComponent]
})
export class TiersModule { }
