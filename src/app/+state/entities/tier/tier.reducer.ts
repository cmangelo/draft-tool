import { createReducer, on } from '@ngrx/store';

import { TierActions, TierActionsType } from './tier.actions';
import { TierModel } from './tier.model';

export interface State {
    entities: { [key: number]: TierModel };
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