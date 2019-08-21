import { TeamModel } from 'src/app/+state/entities/team/team.model';

export interface DraftConfig {
    _id: string;
    numTeams: number;
    numRounds: number;
    userPosition: number;
    // playerConfig: { [key: string]: number };
    teams: Array<TeamModel> | Array<string>;
    QBs: number;
    RBs: number;
    WRs: number;
    TEs: number;
    FLEX: number;
    BENCH: number;
    K: number;
    DEF: number;
}