import { Action, createReducer, on } from '@ngrx/store';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

import { TierModel } from './tier.model';

// import { TierActionsType } from './tier.actions';
export type TierEntityType = { [key: number]: TierModel };

export interface State {
    entities: TierEntityType;
}

export const initialState: State = {
    entities: {}
}

const tierReducer = createReducer(
    initialState,
    on(TiersPageActions.GetPlayersSuccess, (state, action) => {
        return {
            ...state,
            entities: {
                ...state.entities,
                ...action.normalized.entities.tiers
            }
        }
    })
);

export function reducer(state: State | undefined, action: Action) {
    return tierReducer(state, action);
}