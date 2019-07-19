import { Action, createReducer, on } from '@ngrx/store';

import * as PlayerActions from './player.actions';
import { Player } from './player.model';

export interface State {
  entities: { [_id: string]: Player };
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