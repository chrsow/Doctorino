import { combineReducers } from 'redux'
import filteredPatients from './filteredPatients'

const rootReducer = combineReducers({
  filteredPatients
})

export default rootReducer