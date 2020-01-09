import { observable, action } from 'mobx'
import { createContext } from 'react'
import { fetchMainApi } from '../api'

class TeamsStore {
    @observable public teams = []

    @action
    public async getTeams() {
      try {
        this.teams = await fetchMainApi();
      } catch (response) {
        alert(response.message);
      } finally {
      }
    }
}

export const TeamsStoreExport = new TeamsStore()
export const TeamsStoreContext = createContext(new TeamsStore())