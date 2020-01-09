import React, {useEffect, useContext} from "react";
import { observer } from 'mobx-react-lite'
import { PlayersStoreContext } from "../../store/players.store";
import { GamesStoreContext } from "../../store/games.store";
import { List, Avatar } from 'antd';

const Team = observer(({match}: {match: {params: {id: string}}}) => {
  const id = match.params.id
  const playersStore = useContext(PlayersStoreContext)
  const gamesStore = useContext(GamesStoreContext)

  useEffect(() => {
    playersStore.getPlayers(id);
    gamesStore.getGames(id);
  }, [playersStore, gamesStore, id])

  return (
    <div style={{display: 'flex'}}>
      <List
        header={<div>Players</div>}
        itemLayout="horizontal"
        dataSource={playersStore.players}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.flag_url} />}
              title={<a href="https://ant.design">{item.name}</a>}
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
              title={<a href="https://ant.design">{item.team_one_id} - {item.team_two_id}</a>}
              description={`${item.team_one_goals} - ${item.team_two_goals}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
});

export default Team;
