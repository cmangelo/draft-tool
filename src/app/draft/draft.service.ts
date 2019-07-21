import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiHelperService } from '../shared/services/api-helper.service';
import { Draft } from './models/draft.interface';

@Injectable({
    providedIn: 'root'
})
export class DraftService {

    constructor(private api: ApiHelperService) { }

    initializeDraft(): Observable<Draft> {
        return this.api.post('draft', {
            "numTeams": 12,
            "numRounds": 15,
            "userPosition": 3,
            "playerConfig": {
                "QBs": 1,
                "RBs": 2,
                "WRs": 2,
                "TEs": 1,
                "FLEX": 1,
                "BENCH": 6,
                "K": 1,
                "DEF": 1
            }
        })
    }
}