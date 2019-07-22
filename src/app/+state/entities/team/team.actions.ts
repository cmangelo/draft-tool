import { createAction, props } from '@ngrx/store';

import { TeamModel } from './team.model';

export const AddTeams = createAction(
  '[Team/API] Add Teams',
  props<{ teams: { [_id: string]: TeamModel } }>()
);

export const ClearTeams = createAction(
  '[Team/API] Clear Teams'
);

export const AddPlayerToTeam = createAction(
  '[Tiers Page] Add Player To Team',
  props<{ playerId: string, teamId: string, round: number }>()
);