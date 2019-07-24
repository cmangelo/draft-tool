import { createReducer, on } from '@ngrx/store';

import { GroupActions, GroupActionsType } from './group.actions';
import { GroupModel } from './group.model';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

export type GroupEntityType = { [_id: string]: GroupModel }

export interface State {
    entities: GroupEntityType
}

export const initialState: State = {
    entities: {}
}

const groupReducer = createReducer(
    initialState,
    on(TiersPageActions.GetPlayersSuccess, (state, action) => {
        return {
            ...state,
            entities: {
                ...state.entities,
                [action.position]: action.normalized.result
            }
        }
    })
);

export function reducer(state: State | undefined, action: GroupActionsType) {
    return groupReducer(state, action);
}