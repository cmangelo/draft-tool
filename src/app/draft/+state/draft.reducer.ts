import { Action, createReducer, on } from '@ngrx/store';

import { DraftConfig } from '../models/draft.interface';
import * as DraftActions from './draft.actions';

export interface State {
  round: number;
  pick: number;
  picksPerRound: number;
  orderUp: number;
  config: DraftConfig | undefined;
  teams: Array<String>;
}

export const initialState: State = {
  round: 1,
  pick: 1,
  picksPerRound: 12,
  orderUp: 1,
  config: undefined,
  teams: []
};

const draftReducer = createReducer(
  initialState,

  on(DraftActions.LoadDrafts, state => state),
  on(DraftActions.UpdateDraft, (state, action) => {
    return {
      ...state,
      round: action.round,
      pick: action.pick,
      orderUp: action.orderUp
    }
  }),
  on(DraftActions.InitDraftSuccess, (state, action) => {
    return {
      ...state,
      config: action.config,
      teams: action.config.teams as Array<string>
    }
  }),
  on(DraftActions.ResetDraft, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return draftReducer(state, action);
}

