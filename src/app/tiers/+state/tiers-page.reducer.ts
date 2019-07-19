import { createReducer, on, createFeatureSelector } from '@ngrx/store';

import { Position } from '../../shared/enums/position.enum';
import { TiersPageActions, TiersPageActionsType } from './tiers-page.actions';

export interface Tiers {
    activeTab: Position;
    loading: boolean;
}

export interface TiersState {
    readonly tiers: Tiers
}

export const initialState: Tiers = {
    activeTab: Position.QB,
    loading: true,
}

const tiersReducer = createReducer(
    initialState,
    on(TiersPageActions.UpdateActiveTab, (state, action) => { return { ...state, activeTab: action.tab } }),
);

export function reducer(state: Tiers | undefined, action: TiersPageActionsType) {
    return tiersReducer(state, action);
}

export const tiersPageSelector = createFeatureSelector<Tiers>('tiers-page');