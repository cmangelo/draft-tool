import { createAction, props } from '@ngrx/store';

export const LoadDrafts = createAction(
  '[Draft] Load Drafts'
);

export const PickMade = createAction(
  '[Draft] pickMade'
);

export const UpdateDraft = createAction(
  '[Draft Effect] Update Pick And Round',
  props<{ pick: number, round: number, orderUp: number }>()
);

export const ResetDraft = createAction(
  '[Draft] Reset Draft'
);