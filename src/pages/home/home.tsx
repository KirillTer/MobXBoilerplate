import React, {useContext} from "react";
import { observer } from 'mobx-react-lite'
import { Card } from "antd";

import { TeamsStoreContext } from "../../store/teams.store";
import { Teams } from '../../models/teams.model'
import { history } from "../../index";

const { Meta } = Card;

const Home = observer(() => {

  const teamsStore = useContext(TeamsStoreContext)

  const cardToogle = (id: string) => {
    history.push(`/team/${id}`)
  }

  return (
    <>
      {teamsStore.teams.map((team: Teams) => {
        return <Card
          key={team.id}
          hoverable
          style={{ 
            width: 240,
            margin: '0 20px',
            padding: '10px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          cover={<img alt="example" src={team.logo_url} style={{
            height: 100,
            width: 100,
          }}
          onClick={() => cardToogle(team.id)}/>}
        >
          <Meta title={team.name} description={'Budget - ' + team.budget} style={{textAlign: 'center'}}/>
        </Card>
      })}
    </>
  );
});

export default Home;
