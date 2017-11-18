import patients from '../patients'

export default funtion (state = [], action) {
  switch(action.type) {
    case ADD_PATIENT:
      return [...state, action.data]
    default:
      return state
  }
}