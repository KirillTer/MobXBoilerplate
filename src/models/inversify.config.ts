import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { TeamsStoreModel } from "./teams.model";
import { TeamsStore } from "../store/teams.store";
import { PlayersStoreModel } from "./players.model";
import { PlayersStore } from "../store/players.store";
import { GamesStoreModel } from "./games.model";
import { GamesStore } from "../store/games.store";

const mainContainer = new Container();
mainContainer.bind<TeamsStoreModel>(TYPES.TeamsStoreModel).to(TeamsStore);
mainContainer.bind<PlayersStoreModel>(TYPES.PlayersStoreModel).to(PlayersStore);
mainContainer.bind<GamesStoreModel>(TYPES.GamesStoreModel).to(GamesStore);


export { mainContainer };