import { createAction, props, union } from '@ngrx/store';

import { TierModel } from './tier.model';

const AddTier = createAction(
    '[Tiers/API] Add Tier',
    props<{ tiers: { [_id: string]: TierModel } }>()
);

export const TierActions = {
    AddTier
}

const ActionsUnion = union(TierActions);

export type TierActionsType = typeof ActionsUnion;