import { Todo } from "../../../types";
import { TodosActionType, TodoAction } from "../action-types/index"

interface TodosState {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: []
};

const reducer = (state: TodosState = initialState, action: TodoAction): TodosState => {
    switch (action.type) {
        case TodosActionType.ADD_TODO:
            return { todos: [...state.todos, action.payload] };
        case TodosActionType.REMOVE_TODO:
            return { todos: [...state.todos].filter(todo => todo.id !== action.payload) };
        default:
            return state
    }
}

export default reducer