import { Action, createReducer, on } from '@ngrx/store';

import * as DraftActions from '../../../draft/+state/draft.actions';
import * as TeamActions from './team.actions';
import { TeamModel } from './team.model';

export type TeamEntityType = { [_id: string]: TeamModel };

export interface State {
  entities: TeamEntityType;
}

export const initialState: State = {
  entities: {}
};

const teamReducer = createReducer(
  initialState,
  on(DraftActions.InitDraftSuccess, (state, action) => {
    return {
      ...state,
      entities: {
        ...state.entities,
        ...action.teams
      }
    }
  }),
  on(TeamActions.AddPlayerToTeam, (state, action) => {
    if (!state.entities[action.teamId].players)
      state.entities[action.teamId].players = [];
    return {
      entities: {
        ...state.entities,
        [action.teamId]: {
          ...state.entities[action.teamId],
          players: [
            ...state.entities[action.teamId].players,
            action.playerId
          ],
          playerRoundMap: {
            ...state.entities[action.teamId].playerRoundMap,
            [action.round]: action.playerId
          }
        }
      }
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return teamReducer(state, action);
}
