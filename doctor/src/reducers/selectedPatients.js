import patients from '../patients'

export default (state = [], action) =>{
  switch(action.type) {
		case 'ADD_PATIENT':
			console.log('in reducer');
			console.log(state);
			console.log(action);
      return [...state, action.data]
    default:
      return state
  }
}