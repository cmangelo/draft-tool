import * as fromPlayers from '../entities/player/player.reducer';
import * as fromTiers from '../entities/tier/tier.reducer';
import * as fromGroups from '../entities/group/group.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State  {
	players: fromPlayers.State,
	tiers: fromTiers.State,
	groups: fromGroups.State
}

export const reducers: ActionReducerMap<State> = {
	players: fromPlayers.reducer,
	tiers: fromTiers.reducer,
	groups: fromGroups.reducer
}

export const initialState: State = {
	players: undefined,
	tiers: undefined,
	groups: undefined
}