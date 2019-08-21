import { createAction, props } from '@ngrx/store';
import { DraftConfigRequest } from 'src/app/draft-setup/models/draft-config.interface';

import { TeamEntityType } from '../../+state/entities/team/team.reducer';
import { DraftConfig } from '../models/draft-config.interface';

export const LoadDrafts = createAction(
  '[Draft] Load Drafts'
);

export const InitDraft = createAction(
  '[Draft] Init Draft',
  props<{ config: DraftConfigRequest }>()
);

export const GetDraft = createAction(
  '[Draft] Get Draft'
);

export const InitDraftSuccess = createAction(
  '[Draft] Init Draft Success',
  props<{ config: DraftConfig, teams: TeamEntityType, draftId: string }>()
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
);

export const UpdateDraftInitialized = createAction(
  '[Draft] Update Draft Initialized',
  props<{ initialized: boolean }>()
);