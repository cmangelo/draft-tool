import { Action, createReducer, on } from '@ngrx/store';
import { Position } from 'src/app/shared/enums/position.enum';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

import * as PlayerActions from './player.actions';
import { PlayerModel } from './player.model';

export type PlayerEntityType = { [_id: string]: PlayerModel };

export interface State {
  entities: PlayerEntityType;
}

export const initialState: State = {
  entities: {
    '-1': <PlayerModel>{ name: 'Defense', bye: 0, team: 'N/A', position: Position.DEF },
    '-2': <PlayerModel>{ name: 'Kicker', bye: 0, team: 'N/A', position: Position.K }
  }
}

const playerReducer = createReducer(
  initialState,
  on(TiersPageActions.GetPlayersSuccess, (state, action) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        ...action.normalized.entities.players
      }
    }
  }),
  on(PlayerActions.DraftPlayer, (state, action) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [action.playerId]: {
          ...state.entities[action.playerId],
          drafted: true
        }
      }
    }
  }),
  on(PlayerActions.ResetDrafted, (state) => {
    let reset = {};
    for (let key of Object.keys(state.entities)) {
      reset[key] = { ...state.entities[key], drafted: false };
    }
    return {
      ...state,
      entities: { ...reset }
    }
  }),
  on(PlayerActions.ClearPlayers, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return playerReducer(state, action);
}