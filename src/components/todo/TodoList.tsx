import List from '@material-ui/core/List'
import * as React from 'react'
import {ITodoListProps} from '../../types/todo/types'
import CreateTodo from './CreateTodo';
import Todo from './Todo'



const TodoList: React.SFC<ITodoListProps> = ({todos, deleteTodo, createTodo, changeAddTodo, newtodo}: ITodoListProps) => {
    return (
        <div>
            <List component="nav" style={style}>
                {todos.map(todo => {
                    return(<Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />)
                })}
            </List>
            <CreateTodo createTodo={createTodo} changeAddTodo={changeAddTodo} newtodo={newtodo.text}/>
        </div>
    );
};

const style = {
    margin:'auto',
    width:"20%"
}

export default TodoList;