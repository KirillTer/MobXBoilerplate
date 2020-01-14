import { observable, action, computed } from 'mobx'
import "reflect-metadata";
import { injectable, lazyInject } from "inversify";
import { fetchGamesApi } from '../api'
import { Games, GamesStoreModel } from '../models/games.model'
import { TeamsStore } from "./teams.store";
import { TYPES } from "../models/types";

@injectable()
class GamesStore implements GamesStoreModel {

  private _teams: TeamsStore

  public constructor(
    @lazyInject(TYPES.TeamsStoreModel) teams: TeamsStore
  ) {
      this._teams = teams;
  }

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

  @computed
  public getTeamNameById(id: string): string {
    return this._teams.getNameById(id)
  }
}

export {GamesStore}
