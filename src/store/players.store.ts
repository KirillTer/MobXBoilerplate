import { observable, action } from 'mobx'
import { createContext } from 'react'
import { fetchPlayersApi } from '../api'

class PlayersStore {
    @observable players = []

    @action
    public async getPlayers(id: string) {
      try {
        this.players = await fetchPlayersApi(id);
      } catch (response) {
        alert(response.message);
      } finally {
      }
    }
}

export const PlayersStoreContext = createContext(new PlayersStore())