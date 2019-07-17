import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Position } from '../enums/position.enum';
import { Player } from '../models/player.interface';
import { Tier } from '../models/tier.interface';
import { ApiHelperService } from './api-helper.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private api: ApiHelperService) { }

    getPlayerByPosition(position: Position) {
        return this.api.get('players/' + position)
            .pipe(map((data: Array<Player>) => {
                let tiersObject = data.reduce(this.groupPlayersByTier, {});
                return Object.keys(tiersObject).map(key => {
                    return <Tier>{
                        tier: parseInt(key),
                        players: this.sortArray(tiersObject[key], 'rank')
                    };
                });
            }
            ));
    }

    private groupPlayersByTier(acc, player: Player) {
        var tier = player.tier;
        if (!acc[tier]) {
            acc[tier] = [];
        }
        acc[tier].push(player);
        return acc;
    }

    private sortArray(arr, property) {
        return arr.sort((a, b) => {
            return a[property] < b[property] ? -1 : 1;
        });
    }
}