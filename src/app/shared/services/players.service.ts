import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

import { Position } from '../enums/position.enum';
import { ApiHelperService } from './api-helper.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private api: ApiHelperService) { }

    getPlayerByPosition(position: Position): Observable<Array<TierModel>> {
        return this.api.get<Array<TierModel>>('players/' + position);
        // return this.api.get<Array<TierModel>>('tiers')
    }

    updatePlayer(id: string, updates: any) {
        return this.api.patch('players/' + id, updates);
    }
}