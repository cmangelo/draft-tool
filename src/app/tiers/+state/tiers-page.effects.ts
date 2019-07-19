import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { normalize, schema } from 'normalizr';
import { map, switchMap } from 'rxjs/operators';
import { PlayerActions } from 'src/app/+state/entities/player/player.actions';

import { GroupActions } from '../../+state/entities/group/group.actions';
import { TierActions } from '../../+state/entities/tier/tier.actions';
import { PlayersService } from '../../shared/services/players.service';
import { TiersPageActions, TiersPageActionsType } from './tiers-page.actions';

@Injectable({
    providedIn: 'root'
})
export class TiersEffects {

    constructor(private actions: Actions<TiersPageActionsType>,
        private service: PlayersService) { }

    @Effect()
    getPlayersForPosition$ = this.actions
        .pipe(
            ofType(TiersPageActions.GetPlayersForPosition.type),
            switchMap(({ position }) => this.service.getPlayerByPosition(position)
                .pipe(
                    map(res => {
                        const player = new schema.Entity('players', {}, { idAttribute: '_id' });

                        const tier = new schema.Entity('tiers', {
                            players: [player]
                        }, {
                                idAttribute: '_id'
                            });
                        const normalizedData = normalize(res, [tier]);
                        return normalizedData;
                    }),
                    switchMap(normalized => [
                        PlayerActions.AddPlayers({ players: normalized.entities.players }),
                        TierActions.AddTier({ tiers: normalized.entities.tiers, ids: normalized.result }),
                        GroupActions.AddGroup({ group: { position, tiers: normalized.result } })
                    ])
                )
            )
        )
}