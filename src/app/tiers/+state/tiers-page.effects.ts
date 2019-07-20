import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { PlayerActions } from 'src/app/+state/entities/player/player.actions';
import { State } from 'src/app/+state/reducers';

import { GroupActions } from '../../+state/entities/group/group.actions';
import { TierActions } from '../../+state/entities/tier/tier.actions';
import { PlayersService } from '../../shared/services/players.service';
import { TiersPageActions, TiersPageActionsType } from './tiers-page.actions';
import { getGroups } from './tiers-page.selectors';

@Injectable({
    providedIn: 'root'
})
export class TiersEffects {

    constructor(private actions: Actions<TiersPageActionsType>,
        private store$: Store<State>,
        private service: PlayersService) { }

    @Effect()
    getPlayersForPosition$ = this.actions
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
}