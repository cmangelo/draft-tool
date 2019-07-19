import { createAction, props, union } from '@ngrx/store';

import { GroupModel } from './group.model';

const AddGroup = createAction(
    '[Group/API] Add Group',
    props<{ group: GroupModel }>()
);

export const GroupActions = {
    AddGroup
}

const ActionsUnion = union(GroupActions);

export type GroupActionsType = typeof ActionsUnion;