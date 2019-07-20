import { Action, createReducer, on } from '@ngrx/store';

import * as PlayerActions from './player.actions';
import { PlayerModel } from './player.model';

export type PlayerEntityType = { [_id: string]: PlayerModel };

export interface State {
  entities: PlayerEntityType;
}

export const initialState: State = {
  entities: {}
}

const playerReducer = createReducer(
  initialState,
  on(PlayerActions.AddPlayers,
    (state, action) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          ...action.players
        }
      }
    }
  ),
  on(PlayerActions.ClearPlayers, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return playerReducer(state, action);
}

export const getPlayers = (state: State) => state.entities;