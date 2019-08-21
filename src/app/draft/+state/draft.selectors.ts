import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerModel } from 'src/app/+state/entities/player/player.model';
import { TeamModel } from 'src/app/+state/entities/team/team.model';
import { entitiesSelector, getPlayers } from 'src/app/+state/reducers';
import { Position } from 'src/app/shared/enums/position.enum';

import { State } from './draft.reducer';

export const draftSelector = createFeatureSelector<State>('draft');

export const getPick = createSelector(draftSelector, state => state.pick);
export const getRound = createSelector(draftSelector, state => state.round);
export const getOverall = createSelector(draftSelector, state => state.overall);
export const getPicksPerRound = createSelector(draftSelector, state => state.picksPerRound);
export const getOrderUp = createSelector(draftSelector, state => state.orderUp);
export const getDraftConfig = createSelector(draftSelector, state => state.config);
export const getPicks = createSelector(draftSelector, state => state.picks);
export const getQuery = createSelector(draftSelector, state => state.query);
export const getTeams = createSelector(entitiesSelector, state => state.teams.entities);
export const getInitialized = createSelector(draftSelector, state => state.draftInitialized);

export const getDraftPickState = createSelector(
    getPick,
    getRound,
    getOrderUp,
    getOverall,
    (pick, round, orderUp, overall) => {
        return { pick, round, orderUp, overall };
    }
)

export const getActiveTeam = createSelector(
    getOrderUp,
    getTeams,
    (orderUp, teams) => {
        if (!teams) return;
        return Object.keys(teams).map(key => teams[key]).find(x => x.draftPosition === orderUp);
    }
);

export const getSortedTeams = createSelector(
    getTeams,
    (teams) => {
        if (!teams) return [];

        let teamsArr = Object.keys(teams).map(key => teams[key]) as Array<TeamModel>;
        return teamsArr.sort((a, b) => a.draftPosition > b.draftPosition ? 1 : -1);
    }
)

export const getTeamsFillPlayers = createSelector(
    getSortedTeams,
    getPlayers,
    (teams, players) => {
        if (!teams || !players) return;

        return teams.map(team => {
            if (!team.playerRoundMap) return team;
            let map = {};
            for (let round of Object.keys(team.playerRoundMap)) {
                map[round] = players[team.playerRoundMap[round]];
            }
            return {
                ...team,
                playerRoundMap: map
            }
        });
    }
);

export const getMyDraftPosition = createSelector(
    getDraftConfig,
    (config) => { if (!config) return; return config.userPosition }
);

export const getMyTeamFillPlayers = createSelector(
    getMyDraftPosition,
    getTeams,
    getPlayers,
    (position, teams, allPlayers) => {
        if (!position || !teams || !allPlayers) return;

        const team = Object.keys(teams).map(key => teams[key]).find(team => team.draftPosition === position);
        if (!team) return;

        let teamPlayers = {};
        for (let round of Object.keys(team.playerRoundMap)) {
            teamPlayers[round] = allPlayers[team.playerRoundMap[round]];
        }
        let x = {
            ...team,
            playerRoundMap: teamPlayers
        };
        return x;
    }
);

export const getMyPlayerPositionMap = createSelector(
    getMyTeamFillPlayers,
    getDraftConfig,
    (myTeam, config) => {

        let positionMap = {
            QB: [],
            RB: [],
            WR: [],
            TE: [],
            FLEX: [],
            BENCH: [],
            K: [],
            DEF: []
        };

        if (!myTeam || !config) return positionMap;

        Object.keys(myTeam.playerRoundMap).map(key => { return { ...myTeam.playerRoundMap[key], round: key } }).map(player => {
            if (player.position === Position.QB) {
                if (positionMap.QB.length < config.QBs) {
                    positionMap.QB.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.RB) {
                if (positionMap.RB.length < config.RBs) {
                    positionMap.RB.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.WR) {
                if (positionMap.WR.length < config.WRs) {
                    positionMap.WR.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
            if (player.position === Position.TE) {
                if (positionMap.TE.length < config.TEs) {
                    positionMap.TE.push(player);
                } else if (positionMap.FLEX.length < config.FLEX) {
                    positionMap.FLEX.push(player);
                } else {
                    positionMap.BENCH.push(player);
                }
            }
        });
        return positionMap;
    }
);

export const getPlayerCounts = createSelector(
    getTeamsFillPlayers,
    getDraftConfig,
    (teams, config) => {
        if (!teams || !config) return;

        let counts = {
            QB: 0,
            RB: 0,
            WR: 0,
            TE: 0,
            FLEX: 0
        }

        teams.forEach(team => {
            let players = team.players as Array<PlayerModel>;
            // console.log(players)
            if (players.length === 0) return;
            let qbs = players.filter(player => player && player.position === Position.QB).length;
            let rbs = players.filter(player => player && player.position === Position.RB).length;
            let wrs = players.filter(player => player && player.position === Position.WR).length;
            let tes = players.filter(player => player && player.position === Position.TE).length;
            let flex = players.filter(player => player && player.position === Position.FLEX).length;
            //this doesnt work because the players array is actually still just ann aray of strings
            counts.QB += qbs > config.QBs ? config.QBs : qbs;
            counts.RB += rbs > config.RBs ? config.RBs : rbs;
            counts.WR += wrs > config.WRs ? config.WRs : wrs;
            counts.TE += tes > config.TEs ? config.TEs : tes;
            counts.FLEX += flex > config.FLEX ? config.FLEX : flex;
        });
        // console.log(counts);
        return counts;
    }
);

export const getLast3Picks = createSelector(
    getPicks,
    getOverall,
    getPlayers,
    (picks, overall, players) => {
        return Object.keys(picks.overall)
            .filter(pickNumber => parseInt(pickNumber) > overall - 5)
            .sort((a, b) => a < b ? 1 : -1)
            .map(pickNumber => picks.overall[pickNumber])
            .map(playerId => players[playerId]);
    }
)