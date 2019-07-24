import { createFeatureSelector, createReducer } from '@ngrx/store';

import { TiersPageActionsType } from './tiers-page.actions';

export interface Tiers {
    loading: boolean;
}

export const initialState: Tiers = {
    loading: true,
}

const tiersReducer = createReducer(
    initialState
);

export function reducer(state: Tiers | undefined, action: TiersPageActionsType) {
    return tiersReducer(state, action);
}

export const tiersPageSelector = createFeatureSelector<Tiers>('tiers-page');