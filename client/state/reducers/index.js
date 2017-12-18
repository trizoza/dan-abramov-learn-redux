import { combineReducers } from 'redux'

import counter from './counter'
import todos from './todos'
import filter from './filter'

const rootReducer = combineReducers({ counter, todos, filter })

export default rootReducer
