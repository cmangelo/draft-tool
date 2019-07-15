import { Component, OnInit } from '@angular/core';

import { Player } from '../../shared/player.interface';
import { Position } from '../../shared/position.enum';

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
