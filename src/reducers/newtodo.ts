const todos = (state = {text:""}, action: any) => {
    switch (action.type) {
        case 'CHANGE_ADDTODO':
            return {text:action.task}
        default:
            return state
    }
}

export default todos