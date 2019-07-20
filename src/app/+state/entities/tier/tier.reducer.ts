import { createReducer, on } from '@ngrx/store';

import { TierActions, TierActionsType } from './tier.actions';
import { TierModel } from './tier.model';

export type TierEntityType = { [key: number]: TierModel };

export interface State {
    entities: TierEntityType;
}

export const initialState: State = {
    entities: {}
}

const tierReducer = createReducer(
    initialState,
    on(TierActions.AddTier, (state, action) => { return { ...state, entities: { ...state.entities, ...action.tiers } } })
);

export function reducer(state: State | undefined, action: TierActionsType) {
    return tierReducer(state, action);
}

export const getTiers = (state: State) => state.entities;