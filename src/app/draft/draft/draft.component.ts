import { Component, OnInit } from '@angular/core';

import { DraftFacade } from '../+state/draft.facade';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.less']
})
export class DraftComponent implements OnInit {
  activeTeam$ = this.facade.activeTeam$;
  draftConfig$ = this.facade.draftConfig$;
  draftPickState$ = this.facade.draftPickState$;
  picksPerRound$ = this.facade.picksPerRound$;
  teams$ = this.facade.teams$;
  rounds: Array<any>;
  picks: Array<any>;

  constructor(private facade: DraftFacade) { }

  ngOnInit() {
    this.draftConfig$.subscribe(config => {
      if (config) {
        console.log(config.numTeams, config.numRounds)
        this.picks = new Array(config.numTeams);
        this.rounds = new Array(config.numRounds);
      }
    });
    this.teams$.subscribe(x => console.log(x))
  }

}
