import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Position } from '../enums/position.enum';
import { Tier } from '../models/tier.interface';
import { ApiHelperService } from './api-helper.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private api: ApiHelperService) { }

    getPlayerByPosition(position: Position): Observable<Array<Tier>> {
        return this.api.get<Array<Tier>>('players/' + position);
    }

    updatePlayer(id: string, updates: any) {
        return this.api.patch('players/' + id, updates);
    }
}