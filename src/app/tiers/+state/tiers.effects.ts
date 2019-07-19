import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { normalize, schema } from 'normalizr';
import { map, switchMap } from 'rxjs/operators';

import * as playerActions from '../../+state/entities/player/player.actions';
import { PlayersService } from '../../shared/services/players.service';
import { TiersActions, TiersActionsType } from './tiers.actions';

@Injectable({
    providedIn: 'root'
})
export class TiersEffects {

    constructor(private actions: Actions<TiersActionsType>,
        private service: PlayersService) { }

    @Effect()
    getPlayersForPosition$ = this.actions
        .pipe(
            ofType(TiersActions.GetPlayersForPosition.type),
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
                        console.log(JSON.stringify(normalizedData.entities.players));
                        return normalizedData;
                    }),
                    switchMap(normalized => [
                        playerActions.addPlayers({ players: normalized.entities.players }),
                        TiersActions.AddTier({ tiers: normalized.entities.tiers, ids: normalized.result })
                    ])
                )
            )
        )
}