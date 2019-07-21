import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as TeamActions from '../../+state/entities/team/team.actions';
import { DraftService } from '../draft.service';
import * as DraftActions from './draft.actions';
import { getOrderUp, getPick, getPicksPerRound, getRound, State } from './draft.reducer';


@Injectable()
export class DraftEffects {

  constructor(private actions$: Actions, private store$: Store<State>, private service: DraftService) { }

  initDraft$ = createEffect(() => this.actions$
    .pipe(
      ofType(DraftActions.InitDraft),
      switchMap(() => this.service.initializeDraft()
        .pipe(
          switchMap(config => {
            return [
              TeamActions.AddTeams({ teams: config.normTeams }),
              DraftActions.InitDraftSuccess({ config: config.config })
            ]
          })
        )
      )
    ));

  pickMade$ = createEffect(() => this.actions$
    .pipe(
      ofType(DraftActions.PickMade),
      withLatestFrom(this.store$),
      map(([{ }, state]) => {
        const currPick = getPick(state);
        const currRound = getRound(state);
        const currOrderUp = getOrderUp(state);
        const numPicks = getPicksPerRound(state);

        const round = currPick === numPicks ? currRound + 1 : currRound;
        const pick = (currPick % numPicks) + 1;
        let orderUp = round % 2 !== 0 ? currOrderUp + 1 : currOrderUp - 1;
        if (round != currRound)
          orderUp = currOrderUp
        return DraftActions.UpdateDraft({ pick, round, orderUp });
      })
    ));

}
