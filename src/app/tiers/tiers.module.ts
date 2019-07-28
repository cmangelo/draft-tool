import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { TiersEffects } from './+state/tiers-page.effects';
import * as tierState from './+state/tiers-page.reducer';
import { PositionTabComponent } from './position-tab/position-tab.component';
import { TierCardComponent } from './tier-card/tier-card.component';
import { TiersRoutingModule } from './tiers-routing.module';
import { TiersComponent } from './tiers/tiers.component';

@NgModule({
  declarations: [TiersComponent, TierCardComponent, PositionTabComponent],
  imports: [
    CommonModule,
    TiersRoutingModule,
    NgbTabsetModule,
    SharedModule,
    EffectsModule.forFeature([TiersEffects]),
    StoreModule.forFeature('tiers-page', tierState.reducer)
  ],
  exports: [TiersComponent, TierCardComponent]
})
export class TiersModule { }
