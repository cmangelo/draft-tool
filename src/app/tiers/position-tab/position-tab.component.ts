import { Component, Input, OnInit } from '@angular/core';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';
import { PlayersService } from 'src/app/shared/services/players.service';
import { TiersFacade } from 'src/app/tiers/+state/tiers-page.facade';

import { Position } from '../../shared/enums/position.enum';

@Component({
  selector: 'app-position-tab',
  templateUrl: './position-tab.component.html',
  styleUrls: ['./position-tab.component.less']
})
export class PositionTabComponent implements OnInit {
  @Input() position: Position;
  tiers: Array<TierModel>;
  positions = Position;
  currentGroupPlayers$ = this.facade.currentGroupPlayers$;

  constructor(private playerService: PlayersService, private facade: TiersFacade) { }

  ngOnInit() {
    this.facade.getPlayersForAllPositions();
  }

}
