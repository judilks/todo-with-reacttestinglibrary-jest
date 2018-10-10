import { ITodo } from './../types/todo/types';

class TodoActions {
    public createTodo = (text: string) => {
        return {
            todo: {
                id: '_' + Math.random().toString(36).substr(2, 9),
                text
            },
            type:"CREATE_TODO"
        }
    }

    public deleteTodo = (todo: ITodo) => {
        return {
            todo,
            type:"DELETE_TODO",
            
        }
    }

    public changeAddTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        return {
            task:e.target.value,  
            type:'CHANGE_ADDTODO'        
        }
    }
}

const actions = new TodoActions()

export default actions

        