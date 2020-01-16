import React, {useEffect} from "react";
import { observer } from 'mobx-react-lite'
import { Card } from "antd";
import { history } from "../../index";
import { mainContainer } from "../../models/inversify.config";
import { TYPES } from "../../models/types";
import { Team, TeamsStoreModel } from "../../models/teams.model";

const { Meta } = Card;
const teamsStore = mainContainer.get<TeamsStoreModel>(TYPES.TeamsStoreModel);

const Home = observer(() => {

  useEffect(() => {
    teamsStore.getTeams()
  },[])

  const cardToogle = (id: string) => {
    history.push(`/team/${id}`)
  }

  return (
    <>
      {console.log('HOME COMPONENT - Teams -', teamsStore.teams)}
      {teamsStore.teams.map((team: Team) => {
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
