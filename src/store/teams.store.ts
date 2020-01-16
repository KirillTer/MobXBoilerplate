import { observable, action } from 'mobx'
import * as R from 'ramda'
import { injectable } from "inversify";
import "reflect-metadata";
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

  public getNameById(id: string): string {
    console.log('Teams Store -', id, this.teams)
    return this.teams.length ? R.find(R.propEq('id', id))(this.teams).name : []
  }
}

export { TeamsStore }
