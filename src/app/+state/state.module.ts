import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TiersEffects } from '../tiers/+state/tiers.effects';
import * as player from './entities/player/player.reducer';
import * as team from './entities/team/team.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([TiersEffects]),
    StoreModule.forFeature('players', player.reducer),
    StoreModule.forFeature('teams', team.reducer)
  ]
})
export class StateModule { }
