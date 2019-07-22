import { Component, Input, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/+state/entities/player/player.model';
import { Position } from 'src/app/shared/enums/position.enum';

@Component({
  selector: 'app-pick-cell',
  templateUrl: './pick-cell.component.html',
  styleUrls: ['./pick-cell.component.less']
})
export class PickCellComponent implements OnInit {
  @Input() player: PlayerModel;
  @Input() round: number;
  @Input() pick: number;
  @Input() numTeams: number;
  positions = Position;

  constructor() { }

  ngOnInit() {
    if (this.round % 2 === 0) {
      this.pick = Math.abs(this.pick - this.numTeams) + 1;
    }
  }

}
