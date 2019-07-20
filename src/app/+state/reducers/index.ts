import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

import * as fromGroups from '../entities/group/group.reducer';
import * as fromPlayers from '../entities/player/player.reducer';
import * as fromTier from '../entities/tier/tier.reducer';


export interface State {
	players: fromPlayers.State,
	tiers: fromTier.State,
	groups: fromGroups.State,
	// tiersPage: fromTiers.Tiers
}

// export const reducers: ActionReducerMap<State> = {
// 	players: fromPlayers.reducer,
// 	tiers: fromTier.reducer,
// 	groups: fromGroups.reducer,
// 	tiersPage: fromTiers.reducer
// }

export function reducers(state: State | undefined, action: Action) {
	return combineReducers({
		players: fromPlayers.reducer,
		tiers: fromTier.reducer,
		groups: fromGroups.reducer,
	})(state, action);
}

export const initialState: State = {
	players: { entities: {} },
	tiers: { entities: {} },
	groups: { entities: {} },
	// tiersPage: fromTiers.initialState
}

export const entitiesSelector = createFeatureSelector<State>('entities');