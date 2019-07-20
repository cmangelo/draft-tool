import { createSelector } from '@ngrx/store';
import { TierModel } from 'src/app/+state/entities/tier/tier.model';

import { GroupModel } from '../../+state/entities/group/group.model';
import { GroupEntityType } from '../../+state/entities/group/group.reducer';
import { PlayerEntityType } from '../../+state/entities/player/player.reducer';
import { TierEntityType } from '../../+state/entities/tier/tier.reducer';
import { entitiesSelector } from '../../+state/reducers';
import { Position } from '../../shared/enums/position.enum';
import { tiersPageSelector } from './tiers-page.reducer';

export const getGroups = createSelector(entitiesSelector, state => state.groups.entities);

const getTiers = createSelector(entitiesSelector, state => state.tiers.entities);

const getPlayers = createSelector(entitiesSelector, state => state.players.entities);

export const getActiveTab = createSelector(tiersPageSelector, state => state.activeTab);

const getActiveGroup = createSelector(
	getActiveTab,
	getGroups,
	(activeTab: Position, groups: GroupEntityType) => groups[activeTab]
);

export const getTiersForActiveGroup = createSelector(
	getActiveGroup,
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