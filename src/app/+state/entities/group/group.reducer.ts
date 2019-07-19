import { createReducer, on } from '@ngrx/store';

import { GroupActions, GroupActionsType } from './group.actions';
import { GroupModel } from './group.model';

export interface State {
    entities: { [key: number]: GroupModel };
}

export const initialState: State = {
    entities: {}
}

const groupReducer = createReducer(
    initialState,
    on(GroupActions.AddGroup, (state, action) => {
        const id = action.group.position;
        return { ...state, entities: { ...state.entities, [action.group.position]: action.group } }
    })
);

export function reducer(state: State | undefined, action: GroupActionsType) {
    return groupReducer(state, action);
}