import { Component, OnInit } from '@angular/core';

import { Position } from '../../shared/enums/position.enum';
import { PlayerModel } from '../../+state/entities/player/player.model';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.less']
})
export class TiersComponent implements OnInit {
  positions = Position;
  players: Array<PlayerModel>;

  constructor() { }

  ngOnInit() {
  }

}
