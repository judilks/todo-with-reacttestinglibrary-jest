import {combineReducers} from 'redux'
import newtodo from './newtodo'
import todos from './todos'

export default combineReducers({
    newtodo,
    todos,
})