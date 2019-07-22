import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import { GroupActions } from '../../+state/entities/group/group.actions';
import { PlayerActions } from '../../+state/entities/player/player.actions';
import * as TeamActions from '../../+state/entities/team/team.actions';
import { TierActions } from '../../+state/entities/tier/tier.actions';
import { getGroups, State } from '../../+state/reducers';
import * as DraftActions from '../../draft/+state/draft.actions';
import { getActiveTeam, getRound } from '../../draft/+state/draft.selectors';
import { PlayersService } from '../../shared/services/players.service';
import { TiersPageActions, TiersPageActionsType } from './tiers-page.actions';

@Injectable({
    providedIn: 'root'
})
export class TiersEffects {

    constructor(private actions$: Actions<TiersPageActionsType>,
        private store$: Store<State>,
        private service: PlayersService) { }

    @Effect()
    getPlayersForPosition$ = this.actions$
        .pipe(
            ofType(TiersPageActions.GetPlayersForPosition.type),
            withLatestFrom(this.store$),
            mergeMap(([{ position }, store]) => {
                if (getGroups(store)[position]) return EMPTY;

                return this.service.getPlayerByPosition(position)
                    .pipe(
                        switchMap(normalized => [
                            PlayerActions.AddPlayers({ players: normalized.entities.players }),
                            TierActions.AddTier({ tiers: normalized.entities.tiers, ids: normalized.result }),
                            GroupActions.AddGroup({ group: { position, tiers: normalized.result } })
                        ])
                    )
            })
        );

    @Effect()
    draftPlayer$ = this.actions$
        .pipe(
            ofType(TiersPageActions.DraftPlayer),
            withLatestFrom(this.store$),
            switchMap(([{ playerId }, state]) => {
                let teamId = getActiveTeam(state)._id;
                let round = getRound(state);
                return [
                    PlayerActions.DraftPlayer({ playerId }),
                    DraftActions.PickMade(),
                    TeamActions.AddPlayerToTeam({ playerId, teamId, round }),
                ]
            })
        );
}