import { Component, OnInit } from '@angular/core';

import { Position } from '../../shared/enums/position.enum';
import { Player } from '../../shared/models/player.interface';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.less']
})
export class TiersComponent implements OnInit {
  positions = Position;
  players: Array<Player>;

  constructor() { }

  ngOnInit() {
  }

}
