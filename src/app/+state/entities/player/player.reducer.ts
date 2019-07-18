import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Player } from './player.model';
import * as PlayerActions from './player.actions';

export interface State extends EntityState<Player> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>({
  selectId: (player: Player) => player._id
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const playerReducer = createReducer(
  initialState,
  // on(PlayerActions.addPlayer,
  //   (state, action) => adapter.addOne(action.player, state)
  // ),
  // on(PlayerActions.upsertPlayer,
  //   (state, action) => adapter.upsertOne(action.player, state)
  // ),
  on(PlayerActions.addPlayers,
    (state, action) => adapter.addMany(action.players, state)
  ),
  // on(PlayerActions.upsertPlayers,
  //   (state, action) => adapter.upsertMany(action.players, state)
  // ),
  // on(PlayerActions.updatePlayer,
  //   (state, action) => adapter.updateOne(action.player, state)
  // ),
  // on(PlayerActions.updatePlayers,
  //   (state, action) => adapter.updateMany(action.players, state)
  // ),
  // on(PlayerActions.deletePlayer,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(PlayerActions.deletePlayers,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(PlayerActions.loadPlayers,
  //   (state, action) => adapter.addAll(action.players, state)
  // ),
  on(PlayerActions.clearPlayers,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return playerReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
