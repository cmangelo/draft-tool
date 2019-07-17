import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/shared/services/players.service';

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

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.playerService.getPlayerByPosition(this.position).subscribe(data => {
      this.tiers = data;
      console.log(this.tiers);
    });
  }

}
