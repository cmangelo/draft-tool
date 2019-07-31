import { createAction, props } from '@ngrx/store';

import { TeamEntityType } from '../../+state/entities/team/team.reducer';
import { DraftConfig } from '../models/draft-config.interface';

export const LoadDrafts = createAction(
  '[Draft] Load Drafts'
);

export const InitDraft = createAction(
  '[Draft] Init Draft'
);

export const InitDraftSuccess = createAction(
  '[Draft] Init Draft Success',
  props<{ config: DraftConfig, teams: TeamEntityType }>()
);

export const PickMade = createAction(
  '[Draft] Pick Made'
);

export const UpdateDraft = createAction(
  '[Draft Effect] Update Pick And Round',
  props<{ pick: number, round: number, orderUp: number }>()
);

export const ResetDraft = createAction(
  '[Draft] Reset Draft'
);

export const QueryUpdate = createAction(
  '[Draft Dashboard] Search Text Update',
  props<{ query: string }>()
)