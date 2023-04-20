import { Dispatch } from "redux"
import { Pokemon, PokemonApiResults } from "../../../types"
import { PokemonActionType, PokemonAction } from "../action-types"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../../store"
import axios from "axios"

export const fetchingStart = (): PokemonAction => {
    return {
        type: PokemonActionType.STATUS_START
    }
}

export const fetchingFailure = (): PokemonAction => {
    return {
        type: PokemonActionType.STATUS_FAILURE,

    }
}

export const fetchingSuccess = (pokemons: Pokemon[]): PokemonAction => {
    return {
        type: PokemonActionType.STATUS_SUCCESS,
        payload: pokemons
    }
}


export const retrievePokemons =
    (): ThunkAction<void, RootState, unknown, PokemonAction> => async (dispatch: Dispatch<PokemonAction>) => {
        dispatch(fetchingStart());
        try {
            const { data } = await axios.get<PokemonApiResults>("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            dispatch(fetchingSuccess(data.results));
        } catch (error) {
            dispatch(fetchingFailure());
        }
    };

