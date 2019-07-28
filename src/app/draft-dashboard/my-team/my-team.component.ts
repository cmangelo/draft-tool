import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TeamModel } from '../../+state/entities/team/team.model';
import { DraftConfig } from '../../draft/models/draft-config.interface';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.less']
})
export class MyTeamComponent implements OnInit, OnDestroy {
  @Input() myTeam$: Observable<TeamModel>;
  @Input() draftConfig$: Observable<DraftConfig>;
  qbs: Array<any>;
  rbs: Array<any>;
  wrs: Array<any>;
  tes: Array<any>;
  flex: Array<any>;
  bench: Array<any>;
  private unsubscribe$ = new Subject();

  constructor() { }

  ngOnInit() {
    this.draftConfig$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (res) {
        this.qbs = new Array(res.QBs);
        this.rbs = new Array(res.RBs);
        this.wrs = new Array(res.WRs);
        this.tes = new Array(res.TEs);
        this.flex = new Array(res.FLEX);
        this.bench = new Array(res.BENCH);
      }
    })

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }
}
