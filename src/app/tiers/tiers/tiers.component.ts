import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TiersFacade } from '../+state/tiers-page.facade';
import { PlayerModel } from '../../+state/entities/player/player.model';
import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TiersComponent implements OnInit {
  positions = Position;
  players: Array<PlayerModel>;
  positionsArr = [];
  QBs$ = this.facade.QBs$;
  RBs$ = this.facade.RBs$;
  WRs$ = this.facade.WRs$
  TEs$ = this.facade.TEs$;
  FLEX$ = this.facade.FLEX$;
  query$ = this.facade.query$;

  constructor(private facade: TiersFacade) { }

  ngOnInit() {
    //todo find a way to stay on whatever tab we were on whenever we left the page when we come back
    //also keep scroll position
    this.positionsArr = [
      { tiers: this.QBs$, position: Position.QB },
      { tiers: this.RBs$, position: Position.RB },
      { tiers: this.WRs$, position: Position.WR },
      { tiers: this.TEs$, position: Position.TE }
    ]
  }

  draftPlayer(playerId: string) {
    this.facade.draftPlayer(playerId);
  }

  resetDrafted() {
    this.facade.resetDrafted();
  }
}
