import { Pipe, PipeTransform } from '@angular/core';
import { PlayerModel } from 'src/app/+state/entities/player/player.model';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<TierModel>, term: string): any {
    if (!term) return value;

    return value.map(tier => { return { ...tier, players: tier.players.filter((player: PlayerModel) => (new RegExp(term, 'gi').test(player.name))) } })
  }
}
