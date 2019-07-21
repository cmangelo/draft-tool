export interface Draft {
    numTeams: number;
    numRounds: number;
    userPosition: number;
    playerConfig: { [key: string]: number };
}