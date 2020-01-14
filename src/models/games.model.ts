export type Game = {
  id: string;
  team_one_id: string;
  team_two_id: string;
  team_one_goals: string;
  team_two_goals: string;
}

export interface Games extends Array<Game> {
  [index: number]: Game
}

export interface GamesStoreModel {
  games: Games;
  getGames(id: string): void;
  getTeamNameById(id: string): string;
}