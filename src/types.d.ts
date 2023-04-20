export interface Pokemon {
    name: string;
}

export interface PokemonApiResults {
    results: Pokemon[]
}

export interface Todo {
    id: string;
    title: string;
    done: boolean;
}