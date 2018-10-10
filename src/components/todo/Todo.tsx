import {ListItem, ListItemText} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton'
import {Delete} from '@material-ui/icons/'
import * as React from 'react';
import {ITodoProps} from '../../types/todo/types'




const style = {
    
}

const Todo = ({todo, deleteTodo}: ITodoProps) => {

    const onClick = () => {
        deleteTodo(todo)
    }

    return (
        <div>
            <ListItem style={style}>
                <ListItemText primary={todo.text}/>
                <IconButton onClick={onClick}>
                    <Delete/>
                </IconButton>
            </ListItem>
        </div>
    );
};

export default Todo;