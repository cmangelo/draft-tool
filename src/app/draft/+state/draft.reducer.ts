import { Action, createReducer, on } from '@ngrx/store';
import { TiersPageActions } from 'src/app/tiers/+state/tiers-page.actions';

import { DraftConfig } from '../models/draft-config.interface';
import { PlayerCounts } from '../models/player-counts.interface';
import * as DraftActions from './draft.actions';

export interface State {
  round: number;
  pick: number;
  overall: number;
  picksPerRound: number;
  orderUp: number;
  config: DraftConfig | undefined;
  teams: Array<String>;
  picks: { overall: { [key: number]: string }, rounds: { [round: number]: { [pick: number]: string } } }
  counts: PlayerCounts;
  query: string; //this should be moved into the dashboard store once we have that
}

export const initialState: State = {
  round: 1,
  pick: 1,
  overall: 1,
  picksPerRound: 12,
  orderUp: 1,
  config: undefined,
  teams: [],
  picks: { overall: {}, rounds: {} },
  counts: {
    QB: 0,
    RB: 0,
    WR: 0,
    TE: 0,
    FLEX: 0
  },
  query: ''
};

const draftReducer = createReducer(
  initialState,

  on(DraftActions.LoadDrafts, state => state),
  on(DraftActions.UpdateDraft, (state, action) => {
    return {
      ...state,
      round: action.round,
      pick: action.pick,
      orderUp: action.orderUp,
      overall: state.overall + 1
    }
  }),
  on(DraftActions.InitDraftSuccess, (state, action) => {
    return {
      ...state,
      config: action.config,
      teams: action.config.teams as Array<string>
    }
  }),
  on(TiersPageActions.DraftPlayer, (state, action) => {
    return {
      ...state,
      picks: {
        ...state.picks,
        overall: {
          ...state.picks.overall,
          [state.overall]: action.playerId
        }
      }
    }
  }),
  on(DraftActions.QueryUpdate, (state, action) => {
    return {
      ...state,
      query: action.query
    }
  }),
  on(DraftActions.ResetDraft, () => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return draftReducer(state, action);
}

