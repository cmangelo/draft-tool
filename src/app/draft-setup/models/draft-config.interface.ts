export interface DraftConfigRequest {
    numTeams: number;
    numRounds: number;
    userPosition: number;
    playerConfig: PlayerConfig;
}

export interface PlayerConfig {
    QBs: number;
    RBs: number;
    WRs: number;
    TEs: number;
    FLEX: number;
    BENCH: number;
    K: number;
    DEF: number;
}