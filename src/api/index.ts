import request from 'superagent'

const baseURL = 'https://alphafx-code-test-api.herokuapp.com'

export const fetchMainApi = async () => {
  const {body} = await request.post(
    `${baseURL}/api/teams`
  )
  console.log('main API - ', body.data)
  return body.data
}

export const fetchPlayersApi = async (id: string) => {
  const {body} = await request.post(
    `${baseURL}/api/teams/players`
  ).send({ team_id: id})
  console.log('players API - ', body.data)
  return body.data
}

export const fetchGamesApi = async (id: string) => {
  const {body} = await request.post(
    `${baseURL}/api/teams/games`
  ).send({ team_one_id: id})
  console.log('games API - ', body.data)
  return body.data
}