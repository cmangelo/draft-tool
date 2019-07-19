import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TiersEffects } from '../tiers/+state/tiers-page.effects';
import * as group from './entities/group/group.reducer';
import * as player from './entities/player/player.reducer';
import * as team from './entities/team/team.reducer';
import * as tier from './entities/tier/tier.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TiersEffects]),
    StoreModule.forFeature('players', player.reducer),
    StoreModule.forFeature('teams', team.reducer),
    StoreModule.forFeature('groups', group.reducer),
    StoreModule.forFeature('tiers', tier.reducer)
  ]
})
export class StateModule { }
