import { Action, createReducer, on } from '@ngrx/store';

import * as TeamActions from './team.actions';
import { TeamModel } from './team.model';

export type TeamEntityType = { [key: number]: TeamModel };


export interface State {
  entities: TeamEntityType;
}


export const initialState: State = {
  entities: {}
};

const teamReducer = createReducer(
  initialState,
  // on(TeamActions.addTeam,
  //   (state, action) => adapter.addOne(action.team, state)
  // ),
  on(TeamActions.AddPlayerToTeam, (state, action) => {
    return {
      ...state,

    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return teamReducer(state, action);
}
