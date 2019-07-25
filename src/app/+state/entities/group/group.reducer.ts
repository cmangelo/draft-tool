import { Action, createReducer, on } from '@ngrx/store';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

import { GroupModel } from './group.model';

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
                [action.position]: {
                    position: action.position,
                    tiers: action.normalized.result
                }
            }
        }
    })
);

export function reducer(state: State | undefined, action: Action) {
    return groupReducer(state, action);
}