import { observable, action } from 'mobx'
import "reflect-metadata";
import { injectable, inject } from "inversify";
import { fetchGamesApi } from '../api'
import { Games, GamesStoreModel } from '../models/games.model'
import { TYPES } from "../models/types";
import { TeamsStoreModel } from '../models/teams.model';

@injectable()
class GamesStore implements GamesStoreModel {

  @inject(TYPES.TeamsStoreModel) private _teams!: TeamsStoreModel;

  @observable games: Games = [];

  @action
  public async getGames(id: string): Promise<void> {
    try {
      this.games = await fetchGamesApi(id)
    } catch (response) {
      alert(response.message)
    } finally {
    }
  }

  @action
  public getTeamNameById(id: string) { return this._teams.getNameById(id)}
}

export {GamesStore}
