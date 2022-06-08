import { ChampionName } from "./ChampionNames.interface";

export interface MatchDetail {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  queueId: number;
  players: Player[];
  teams: TeamData[];
}

export interface Player {
  assists: number;
  champLevel: number;
  championId: number;
  championName: ChampionName;
  championTransform: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  deaths: number;
  goldEarned: number;
  individualPosition: string;
  items: number[];
  kills: number;
  longestTimeSpentLiving: number;
  neutralMinionsKilled: number;
  objectivesStolen: number;
  rune1Id: number;
  rune2Id: number;
  profileIcon: number;
  puuid: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  summoner1Id: number;
  summoner2Id: number;
  summonerName: string;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  totalMinionsKilled: number;
  turretKills: number;
  win: boolean;
}

export interface TeamData {
  bans: Bans[];
  objectives: {
    baron: Objectives;
    champion: Objectives;
    dragon: Objectives;
    inhibitor: Objectives;
    riftHerald: Objectives;
    tower: Objectives;
  };
  playerIds: string[];
  teamId: number;
  win: boolean;
}

interface Bans {
  championId: number;
  pickTurn: number;
}

interface Objectives {
  first: boolean;
  kills: number;
}
