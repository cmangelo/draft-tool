import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TierEffects } from './features/tier.effects';
import * as root from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature('players', player.reducer),
    // StoreModule.forFeature('teams', team.reducer),
    // StoreModule.forFeature('groups', group.reducer),
    // StoreModule.forFeature('tiers', tier.reducer)
    // StoreModule.forRoot(rootreducers, { initialState: root.initialState }),
    StoreModule.forFeature('entities', root.reducers),
    EffectsModule.forFeature([TierEffects])
  ]
})
export class StateModule { }
