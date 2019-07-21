import { createAction, props } from '@ngrx/store';

import { TeamModel } from './team.model';

export const AddTeam = createAction(
  '[Team/API] Add Team',
  props<{ team: TeamModel }>()
);

export const ClearTeams = createAction(
  '[Team/API] Clear Teams'
);

export const AddPlayerToTeam = createAction(
  '[Tiers Page] Add Player',
  props<{ playerId: string, teamId: string }>()
);