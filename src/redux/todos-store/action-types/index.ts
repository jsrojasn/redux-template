import { Todo } from "../../../types";

export enum TodosActionType {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
}

interface AddTodoAction {
    type: TodosActionType.ADD_TODO,
    payload: Todo
}



interface RemoveTodoAction {
    type: TodosActionType.REMOVE_TODO,
    payload: string
}

export type TodoAction = AddTodoAction | RemoveTodoAction;
