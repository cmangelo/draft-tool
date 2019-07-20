import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as TeamActions from './team.actions';
import { Team } from './team.model';

export interface State extends EntityState<Team> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>({
  selectId: (team: Team) => team._id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const teamReducer = createReducer(
  initialState,
  on(TeamActions.addTeam,
    (state, action) => adapter.addOne(action.team, state)
  ),
  on(TeamActions.upsertTeam,
    (state, action) => adapter.upsertOne(action.team, state)
  ),
  on(TeamActions.addTeams,
    (state, action) => adapter.addMany(action.teams, state)
  ),
  on(TeamActions.upsertTeams,
    (state, action) => adapter.upsertMany(action.teams, state)
  ),
  on(TeamActions.updateTeam,
    (state, action) => adapter.updateOne(action.team, state)
  ),
  on(TeamActions.updateTeams,
    (state, action) => adapter.updateMany(action.teams, state)
  ),
  on(TeamActions.deleteTeam,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TeamActions.deleteTeams,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TeamActions.clearTeams,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return teamReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
