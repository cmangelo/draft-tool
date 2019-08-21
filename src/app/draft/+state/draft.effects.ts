import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { StorageService } from '../../shared/services/storage.service';
import { DraftService } from '../draft.service';
import * as DraftActions from './draft.actions';
import { State } from './draft.reducer';
import { getOrderUp, getPick, getPicksPerRound, getRound } from './draft.selectors';


@Injectable()
export class DraftEffects {

  constructor(private actions$: Actions,
    private store$: Store<State>,
    private service: DraftService,
    private router: Router,
    private storage: StorageService) { }

  initDraft$ = createEffect(() => this.actions$
    .pipe(
      ofType(DraftActions.InitDraft),
      switchMap(({ config }) => this.service.initDraft(config)
        .pipe(
          map(config => DraftActions.InitDraftSuccess({ config: config.config, teams: config.normTeams, draftId: config._id }))
        )
      )
    ));

  getDraft$ = createEffect(() => this.actions$
    .pipe(
      ofType(DraftActions.GetDraft),
      switchMap(() => this.service.getDraft()
        .pipe(
          map(config => DraftActions.InitDraftSuccess({ config: config.config, teams: config.normTeams, draftId: config._id }))
        )
      )
    ));

  initDraftSuccess$ = createEffect(() => this.actions$
    .pipe(
      ofType(DraftActions.InitDraftSuccess),
      tap(() => this.router.navigateByUrl('tiers')),
      tap(({ config }) => this.storage.save('draftId', config._id))
    ),
    { dispatch: false }
  );

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
