import { createReducer, on } from '@ngrx/store';
import { Tier } from 'src/app/shared/models/tier.interface';

import { Position } from '../../shared/enums/position.enum';
import { TiersActions, TiersActionsType } from './tiers.actions';

export interface Tiers {
    activeTab: Position,
    loading: boolean,
    tiers: { [_id: string]: Tier };
    ids: Array<string>;
}

export interface TiersState {
    readonly tiers: Tiers
}

export const initialState: Tiers = {
    activeTab: Position.QB,
    loading: true,
    tiers: {},
    ids: []
}

const tiersReducer = createReducer(
    initialState,
    on(TiersActions.UpdateActiveTab, (state, action) => { return { ...state, activeTab: action.tab } }),
    on(TiersActions.AddTier, (state, action) => { return { ...state, tiers: action.tiers, ids: action.ids } })
);

export function reducer(state: Tiers | undefined, action: TiersActionsType) {
    return tiersReducer(state, action);
}