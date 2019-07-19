import { Action, createReducer, on } from '@ngrx/store';

import * as PlayerActions from './player.actions';
import { Player } from './player.model';

export interface State {
  players: { [_id: string]: Player };
}

export const initialState: State = {
  players: {}
}

const playerReducer = createReducer(
  initialState,
  on(PlayerActions.addPlayers,
    (state, action) => {
      return {
        ...state,
        players: {
          ...state.players,
          ...action.players
        }
      }
    }
  ),
  on(PlayerActions.clearPlayers, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return playerReducer(state, action);
}