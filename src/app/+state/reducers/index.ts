import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromGroups from '../entities/group/group.reducer';
import * as fromPlayers from '../entities/player/player.reducer';
import * as fromTeams from '../entities/team/team.reducer';
import * as fromTiers from '../entities/tier/tier.reducer';

export interface State {
	players: fromPlayers.State,
	tiers: fromTiers.State,
	groups: fromGroups.State
	teams: fromTeams.State
}

export function reducers(state: State | undefined, action: Action) {
	return combineReducers({
		players: fromPlayers.reducer,
		tiers: fromTiers.reducer,
		groups: fromGroups.reducer,
		teams: fromTeams.reducer
	})(state, action);
}

export const initialState: State = {
	players: { entities: {} },
	tiers: { entities: {} },
	groups: { entities: {} },
	teams: { entities: {} }
}

export const entitiesSelector = createFeatureSelector<State>('entities');

export const getPlayers = createSelector(entitiesSelector, state => state.players.entities);
export const getGroups = createSelector(entitiesSelector, state => state.groups.entities);
export const getTiers = createSelector(entitiesSelector, state => state.tiers.entities);
