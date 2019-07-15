import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FLEX, QBs, RBs, TEs, WRs } from '../data';
import { Player } from '../player.interface';
import { Position } from '../position.enum';
import { Tier } from '../tier.interface';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor() { }

    getPlayerByPosition(position: Position): Observable<Array<Tier>> {
        let players: Array<any>;
        switch (position) {
            case Position.QB:
                players = QBs;
                break;
            case Position.RB:
                players = RBs;
                break;
            case Position.WR:
                players = WRs;
                break;
            case Position.TE:
                players = TEs;
                break;
            case Position.FLEX:
                players = FLEX;
                break;
            default:
                break;
        }

        let tiersObject = players
            .map(this.jsonToTS)
            .reduce(this.groupPlayersByTier, {});
        let tiersArray = Object.keys(tiersObject).map(key => {
            return <Tier>{
                tier: parseInt(key),
                players: this.sortArray(tiersObject[key], 'rank')
            };
        });
        return of(this.sortArray(tiersArray, 'tier'));

    }

    private jsonToTS(jsonObj: any): Player {
        return <Player>{
            adp: jsonObj['ADP'],
            bye: jsonObj['Bye Week'],
            name: jsonObj['Name'],
            notes: jsonObj['Notes'],
            points: jsonObj['Points'],
            rank: jsonObj['Rank'],
            risk: jsonObj['Risk'],
            team: jsonObj['Team'],
            tier: jsonObj['Tier']
        }
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
            return a[property] < b[property] ? 1 : -1;
        });
    }
}