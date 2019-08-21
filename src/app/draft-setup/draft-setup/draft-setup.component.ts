import { Component, OnInit } from '@angular/core';
import { DraftFacade } from 'src/app/draft/+state/draft.facade';

import { DraftConfigRequest } from '../models/draft-config.interface';

@Component({
  selector: 'app-draft-setup',
  templateUrl: './draft-setup.component.html',
  styleUrls: ['./draft-setup.component.less']
})
export class DraftSetupComponent implements OnInit {
  myPosition = 1;
  teams = 12;
  QBs = 1;
  RBs = 2;
  WRs = 2;
  TEs = 1;
  FLEX = 1;
  DEF = 1;
  K = 1;
  BENCH = 6;

  constructor(private facade: DraftFacade) { }

  ngOnInit() {
  }

  submit() {
    const req: DraftConfigRequest = {
      numRounds: this.sumPlayers(),
      numTeams: this.teams,
      userPosition: this.myPosition,
      playerConfig: {
        QBs: this.QBs,
        RBs: this.RBs,
        WRs: this.WRs,
        TEs: this.TEs,
        FLEX: this.FLEX,
        DEF: this.DEF,
        K: this.K,
        BENCH: this.BENCH
      }
    }

    // this.service.initDraft(req).subscribe();
    this.facade.initializeDraft(req);
  }

  sumPlayers(): number {
    return this.QBs + this.RBs + this.WRs + this.TEs + this.FLEX + this.DEF + this.K + this.BENCH;
  }

}
