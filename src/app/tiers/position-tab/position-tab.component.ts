import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/shared/services/players.service';
import { TiersFacade } from 'src/app/tiers/+state/tiers.facade';

import { Position } from '../../shared/enums/position.enum';
import { Tier } from '../../shared/models/tier.interface';

@Component({
  selector: 'app-position-tab',
  templateUrl: './position-tab.component.html',
  styleUrls: ['./position-tab.component.less']
})
export class PositionTabComponent implements OnInit {
  @Input() position: Position;
  tiers: Array<Tier>;
  positions = Position;

  constructor(private playerService: PlayersService, private facade: TiersFacade) { }

  ngOnInit() {
    // this.playerService.getPlayerByPosition(this.position).subscribe(data => {
    //   this.tiers = data;
    // });
    // this.playerService.updatePlayer('5d2e9822d5477953c4fef11a', { owner: 'Cma', draftedRound: 3, draftedPick: 4 }).subscribe();
    // this.facade.getPlayersForPosition(Position.QB);
    this.facade.getPlayersForAllPositions();
  }

}
