import { Todo } from "../../../types"
import { TodoAction, TodosActionType } from "../action-types"

export const addTodo = (todo: Todo): TodoAction => {
    return {
        type: TodosActionType.ADD_TODO,
        payload: todo
    }
}

export const removeTodo = (id: string): TodoAction => {
    return {
        type: TodosActionType.REMOVE_TODO,
        payload: id
    }
}


