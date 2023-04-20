import { Pokemon } from "../../../types";

export enum PokemonActionType {
    STATUS_START = "STATUS_START",
    STATUS_SUCCESS = "STATUS_SUCCESS",
    STATUS_FAILURE = "STATUS_FAILURE",
}

interface PokemonStartAction {
    type: PokemonActionType.STATUS_START,
}

interface PokemonSuccessAction {
    type: PokemonActionType.STATUS_SUCCESS,
    payload: Pokemon[]
}

interface PokemonFailureAction {
    type: PokemonActionType.STATUS_FAILURE
}

export type PokemonAction = PokemonStartAction | PokemonSuccessAction | PokemonFailureAction;
