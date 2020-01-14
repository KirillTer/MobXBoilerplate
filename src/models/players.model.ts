export type History = Array<{
  team_id: string;
  goals: string;
}>

export type Player = {
  id: string;
  name: string;
  flag_url: string;
  nationality: string;
  history: History;
}

export interface Players extends Array<Player> {
  [index: number]: Player
}

export interface PlayersStoreModel {
  players: Players;
  getPlayers(id: string): void;
  getPlayersHistory(id: string): History
}
