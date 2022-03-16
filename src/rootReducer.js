import { combineReducers } from 'redux'
import { dialogReducer, aircraftReducer } from './containers/home/reducer'


const rootReducer = combineReducers({
  dialog: dialogReducer,
  aircraft: aircraftReducer
})

export default rootReducer