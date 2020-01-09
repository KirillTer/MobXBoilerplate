import { observable, action } from 'mobx'
import { createContext } from 'react'
import { fetchGamesApi } from '../api'

class GamesStore {
  @observable games = []

  @action
  public async getGames(id: string) {
    try {
      this.games = await fetchGamesApi(id);
    } catch (response) {
      alert(response.message);
    } finally {
    }
  }
}

export const GamesStoreContext = createContext(new GamesStore())