import newtodo from './newtodo'
import todos from './todos'

const todoState = (state = {newtodo, todos}, action: any) => {
    return state
}

export default todoState;  