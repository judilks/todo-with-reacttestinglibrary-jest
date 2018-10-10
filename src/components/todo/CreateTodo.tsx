import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import {ICreateTodoProps} from '../../types/todo/types'


const CreateTodo: React.SFC<ICreateTodoProps> = ({changeAddTodo, createTodo, newtodo} : ICreateTodoProps) => {

    const onClick = () => {
        createTodo(newtodo)
    }

    return (
        <div>
            <TextField
                id="newTodo"
                label="Create Todo"
                margin="normal"
                onChange={changeAddTodo}
            />
            <Button variant="contained" color="secondary" style={style} onClick={onClick}>
                Add Todo
            </Button>
        </div>
    );
};

const style = {
    display:'block',
    margin:'auto',
    marginTop:10
}    

// const f = ({newtodo, createTodo}: ICreateTodoProps}) => <button onClick={props.onClick}></button>


export default CreateTodo;