import React, {useEffect} from "react";
import { observer } from 'mobx-react-lite'
import * as R from 'ramda'
import { history } from "../../index";
import { mainContainer } from "../../models/inversify.config";
import { TYPES } from "../../models/types";
import { TeamsStoreModel } from "../../models/teams.model";
import { PlayersStoreModel } from "../../models/players.model";
import { GamesStoreModel } from "../../models/games.model";
import { List, Avatar } from 'antd';

const teamsStore = mainContainer.get<TeamsStoreModel>(TYPES.TeamsStoreModel);
const playersStore = mainContainer.get<PlayersStoreModel>(TYPES.PlayersStoreModel);
const gamesStore = mainContainer.get<GamesStoreModel>(TYPES.GamesStoreModel);

const TeamComponent = observer(({match, ...props}: any) => {
  const id = match.params.id

  useEffect(() => {
    teamsStore.getTeams()
    playersStore.getPlayers(id);
    gamesStore.getGames(id);
  }, [id])

  const playerToogle = (id: string) => {
    history.push(`/player/${id}`)
  }

  return (
    <div style={{display: 'flex'}}>
      {console.log('Team component', playersStore, gamesStore, props)}
      <List
        header={<div>Players</div>}
        itemLayout="horizontal"
        dataSource={playersStore.players}
        renderItem={(item: any) => (
          <List.Item onClick={() => playerToogle(item.id)}>
            <List.Item.Meta
              avatar={<Avatar src={item.flag_url} />}
              title={item.name}
              description={`nationality - ${item.nationality}`}
            />
          </List.Item>
        )}
      />
      <List
        header={<div>Games</div>}
        itemLayout="horizontal"
        dataSource={gamesStore.games}
        style={{marginLeft: 30}}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={<div>
                {R.find(R.propEq('id', item.team_one_id))(teamsStore.teams).name + ' - ' + R.find(R.propEq('id', item.team_two_id))(teamsStore.teams).name}
              </div>}
              description={`${item.team_one_goals} - ${item.team_two_goals}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
});

export default TeamComponent;
