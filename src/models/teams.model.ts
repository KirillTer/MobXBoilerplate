export type Team = {
  id: string;
  name: string;
  logo_url: string;
  budget: string;
}

export interface Teams extends Array<Team> {
  [index: number]: Team
}

export interface TeamsStoreModel {
  teams: Teams;
  getTeams(): void;
  getNameById(id: string): any;
}