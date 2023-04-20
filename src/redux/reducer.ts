import { combineReducers } from "redux";
import pokemonReducer from "./pokemons-store/reducers"
import todosReducer from "./todos-store/reducers"



const reducers = combineReducers({
    pokemonsState: pokemonReducer,
    todosState: todosReducer
})

export default reducers