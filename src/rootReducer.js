import { combineReducers } from 'redux'

import dialogReducer from './containers/home/reducer'

const rootReducer = combineReducers({
  dialog: dialogReducer,
})

export default rootReducer