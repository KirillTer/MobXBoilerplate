import { observable, action, autorun, computed } from 'mobx'
import * as R from 'ramda'
import { injectable } from "inversify";
import { fetchMainApi } from '../api'
import { Teams, TeamsStoreModel } from '../models/teams.model'

@injectable()
class TeamsStore implements TeamsStoreModel {
  @observable public teams: Teams = [];

  @action
  public async getTeams(): Promise<void> {
    try {
      this.teams = await fetchMainApi();
    } catch (response) {
      alert(response.message);
    }
  }

  @computed
  public getNameById(id: string): string {
    return R.find(R.propEq('id', id))(this.teams).name
  }
}

const teamsStore = new TeamsStore()
export { TeamsStore }

autorun(() => {
  console.log('Teams store - ', teamsStore.teams)
})