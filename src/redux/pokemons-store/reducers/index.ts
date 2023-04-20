import { Pokemon } from "../../../types";
import { PokemonActionType, PokemonAction } from "../action-types/index"

interface PokemonsState {
    loading: boolean;
    error: boolean;
    pokemons: Pokemon[]
}

const initialState: PokemonsState = {
    loading: false,
    error: false,
    pokemons: []
};

const reducer = (state: PokemonsState = initialState, action: PokemonAction): PokemonsState => {
    switch (action.type) {
        case PokemonActionType.STATUS_START:
            return { ...state, loading: false };
        case PokemonActionType.STATUS_FAILURE:
            return { ...state, error: true };
        case PokemonActionType.STATUS_SUCCESS:
            return { ...state, pokemons: action.payload };
        default:
            return state
    }
}

export default reducer