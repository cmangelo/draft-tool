import { Injectable } from '@angular/core';
import { normalize, NormalizedSchema, schema } from 'normalizr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

import { Position } from '../enums/position.enum';
import { ApiHelperService } from './api-helper.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private api: ApiHelperService) { }

    getPlayerByPosition(position: Position): Observable<NormalizedSchema<any, any>> {
        return this.api.get<Array<TierModel>>('players/' + position)
            .pipe(map(this.normalizeTiers));
    }

    updatePlayer(id: string, updates: any) {
        return this.api.patch('players/' + id, updates);
    }

    private normalizeTiers(tiers: Array<TierModel>): NormalizedSchema<TierModel, any> {
        const player = new schema.Entity('players', {}, { idAttribute: '_id' });

        const tier = new schema.Entity('tiers', {
            players: [player]
        }, {
                idAttribute: '_id'
            });
        const normalizedData = normalize(tiers, [tier]);
        return normalizedData;
    }
}