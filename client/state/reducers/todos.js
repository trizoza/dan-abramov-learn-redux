const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('state ', action.text)
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default todos
