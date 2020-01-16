import React, {useEffect} from "react";
import { observer } from 'mobx-react-lite';
import { mainContainer } from "../../models/inversify.config";
import { TYPES } from "../../models/types";
import { PlayersStoreModel } from "../../models/players.model";
import { List } from 'antd';

const playersStore = mainContainer.get<PlayersStoreModel>(TYPES.PlayersStoreModel);

const Player = observer(({match}: {match: {params: {id: string}}}) => {
  const id = match.params.id

  useEffect(() => {
    playersStore.getPlayers("a8986737-030e-4c2d-90c9-8313c18e483b");
  }, [])

  if (!playersStore.players.length) {
    return <h1>Test</h1>;
  }

  return (
    <div style={{display: 'flex'}}>
      {console.log('PLAYERS COMPONENT - ', playersStore.players)}
      <List
        header={<div>History</div>}
        itemLayout="horizontal"
        dataSource={playersStore.getPlayersHistory(id)}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              // title={R.find(R.propEq('id', item.team_id))(teamsStore.teams).name}
              description={`goals - ${item.goals}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
});

export default Player;
