import { observable, action } from 'mobx'
import { injectable } from "inversify";
import { fetchPlayersApi } from '../api'
import { History, Players, PlayersStoreModel } from '../models/players.model'

@injectable()
class PlayersStore implements PlayersStoreModel {
  @observable players: Players = [];

  @action
  public async getPlayers(id: string): Promise<void> {
    try{
      this.players = await fetchPlayersApi(id);
    } catch (response) {
      alert(response.message);
    }
  }
 
  public getPlayersHistory(userId: string): History {
    return this.players.find(({id}) => id === userId)?.history || [];
  }
}

export { PlayersStore }
