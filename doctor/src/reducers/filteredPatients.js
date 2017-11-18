import patients from '../patients'

export default function (state = [], action) {
  switch(action.type) {
    case ADD_PATIENT:
      return [...state, action.data]
    default:
      return state
  }
}