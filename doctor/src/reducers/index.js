import { combineReducers } from 'redux'
import selectedPatients from './selectedPatients'

const rootReducer = combineReducers({
  selectedPatients: selectedPatients || []
})

export default rootReducer