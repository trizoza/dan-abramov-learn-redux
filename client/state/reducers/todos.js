const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        (todo.id === action.id)
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo
      )
    default:
      return state
  }
}

export default todos

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'completed':
      return state.filter(t => t.completed)
    case 'due':
      return state.filter(t => !t.completed)
    case 'all':
      return state
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}
