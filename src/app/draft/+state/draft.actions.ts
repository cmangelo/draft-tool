import { createAction, props } from '@ngrx/store';

import { Draft } from '../models/draft.interface';

export const LoadDrafts = createAction(
  '[Draft] Load Drafts'
);

export const InitDraft = createAction(
  '[Draft] Init Draft'
);

export const InitDraftSuccess = createAction(
  '[Draft] Init Draft Success',
  props<{ draft: Draft }>()
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