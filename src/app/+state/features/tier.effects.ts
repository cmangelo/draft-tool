import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as TierActions from './tier.actions';


@Injectable()
export class TierEffects {


  loadTiers$ = createEffect(() => this.actions$.pipe(
    ofType(TierActions.loadTiers),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
