import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeamModel } from '../+state/entities/team/team.model';
import { DraftConfigRequest } from '../draft-setup/models/draft-config.interface';
import { ApiHelperService } from '../shared/services/api-helper.service';
import { StorageService } from '../shared/services/storage.service';
import { DraftConfig } from './models/draft-config.interface';

@Injectable({
    providedIn: 'root'
})
export class DraftService {

    constructor(private api: ApiHelperService, private storage: StorageService) { }

    initDraft(draftConfig: DraftConfigRequest): Observable<any> {
        return this.api.post<DraftConfig>('draft', draftConfig)
            .pipe(map(this.normalizeDraft));
    }

    getDraft() {
        const draftId = this.storage.get('draftId');
        return this.api.get<DraftConfig>('draft/' + draftId)
            .pipe(map(this.normalizeDraft));
    }

    normalizeDraft(config) {
        let teams = config.teams as Array<TeamModel>;
        config.teams = teams.map(team => team._id);
        let normTeams = teams.reduce((obj, item) => {
            item.players = new Array(config.numRounds);
            item.playerRoundMap = {};
            obj[item._id] = item;
            return obj
        }, {});
        return { config, normTeams, _id: config._id };

    }
}