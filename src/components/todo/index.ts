import { connect } from 'react-redux';
import {IApplicationState} from 'src/types'
import TodoActions from '../../actions/TodoActions'
import TodoList from './TodoList'

const mapStateToProps = (state: IApplicationState) => {
    return {
        newtodo:state.newtodo,
        todos: state.todos
    };
}

const mapDispatchToProps = {
    changeAddTodo: TodoActions.changeAddTodo,
    createTodo: TodoActions.createTodo,
    deleteTodo: TodoActions.deleteTodo, 
    
  }

export default connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);