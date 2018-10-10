export interface ITodo {
    id: number,
    text:string
}

export interface ITodosState{
    todos: ITodo[]
}

export interface INewTodoState{
    newtodo: {text:string}
}

export interface ICreateTodoProps{
    createTodo: (task:string) => any
    changeAddTodo: (e: React.ChangeEvent<HTMLInputElement>) => any
    newtodo:string
}

export interface ITodoListProps {
    todos: ITodo[],
    deleteTodo: (todo: ITodo)=> any, 
    createTodo: (task:string)=> any,
    changeAddTodo: (e: React.ChangeEvent<HTMLInputElement>)=>any,
    newtodo: {text:string}

}

export interface ITodoProps {
    todo: ITodo,
    deleteTodo: (todo: ITodo)=> any

}

