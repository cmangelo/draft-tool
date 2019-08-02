import { createAction, props } from '@ngrx/store';

export const ClearTeams = createAction(
  '[Team/API] Clear Teams'
);

export const AddPlayerToTeam = createAction(
  '[Tiers Page] Add Player To Team',
  props<{ playerId: string, teamId: string, round: number }>()
);