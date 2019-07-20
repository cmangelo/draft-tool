import { Action, createReducer, on } from '@ngrx/store';
import * as TierActions from './tier.actions';

export interface State {

}

export const initialState: State = {

};

const tierReducer = createReducer(
  initialState,

  on(TierActions.loadTiers, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return tierReducer(state, action);
}
