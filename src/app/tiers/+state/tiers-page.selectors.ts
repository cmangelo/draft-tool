import { createSelector } from '@ngrx/store';

import { GroupModel } from '../../+state/entities/group/group.model';
import { PlayerEntityType } from '../../+state/entities/player/player.reducer';
import { TierModel } from '../../+state/entities/tier/tier.model';
import { TierEntityType } from '../../+state/entities/tier/tier.reducer';
import { getGroups, getPlayers, getTiers } from '../../+state/reducers';

const getPositionGroup = createSelector(
	getGroups,
	(groups, props) => groups[props.position]
);

export const getTiersForActiveGroup = createSelector(
	getPositionGroup,
	getTiers,
	getPlayers,
	(group: GroupModel, tiers: TierEntityType, players: PlayerEntityType) => {
		if (!group || !tiers || !players) return;
		let groupTiers = group.tiers as Array<string>;
		let populatedGroup = groupTiers.map(key => tiers[key]);
		return populatedGroup;
	}
);

export const getPopulatedTiers = createSelector(
	getTiersForActiveGroup,
	getPlayers,
	(populatedGroup, players) => {
		if (!populatedGroup || !players) return;
		let populatedTiers = populatedGroup.map((t: TierModel) => {
			let tp = t.players.map(key => players[key]);
			return { ...t, players: tp }
		});
		return populatedTiers;
	}
)