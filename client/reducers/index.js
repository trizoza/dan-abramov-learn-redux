import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import topics from './topics'
import messages from './messages'

const rootReducer = combineReducers({ topics, messages, routing: routerReducer })

export default rootReducer
