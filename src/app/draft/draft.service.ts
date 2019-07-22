import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeamModel } from '../+state/entities/team/team.model';
import { ApiHelperService } from '../shared/services/api-helper.service';
import { DraftConfig } from './models/draft.interface';

@Injectable({
    providedIn: 'root'
})
export class DraftService {

    private draftConfig = {
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
    }

    constructor(private api: ApiHelperService) { }

    initializeDraft(): Observable<any> {
        return this.api.post<DraftConfig>('draft', this.draftConfig)
            .pipe(
                map(config => {
                    let teams = config.teams as Array<TeamModel>;
                    config.teams = teams.map(team => team._id);
                    let normTeams = teams.reduce((obj, item) => {
                        item.players = new Array(config.numRounds);
                        item.playerRoundMap = {};
                        obj[item._id] = item;
                        return obj
                    }, {});
                    return { config, normTeams };
                })
            );
    }
}