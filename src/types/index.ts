import { INewTodoState, ITodosState  } from './todo/types';

export interface IApplicationState {
    todos: ITodosState
    newtodo: INewTodoState
}