//REDUCER 
import {combineReducers} from 'redux';
//THIS IS CONSIDERED OUR OLD STATE, ONCE IT RE-RENDERS THE REDUCER WILL TRIGGER AN ACTION AND MAKE CHANGES TO CREATE A NEW STATE
const goal = (state,action) => {
	switch(action.type){
		case'ADD_GOAL':
		return {
			id:action.id,
			text:action.text,
			completed:false
		};

		case'COMPLETED_GOALS':
		if(state.id !== action.id){
			return state;
		}
		return{
			...state,
			completed:!state.completed
		};
		default:
		return state;
	}
};

const goals = (state =[],action) =>{
	switch(action.type){
		case 'ADD_GOAL':
		return [
			...state,
			goal(undefined,action)
		];

		case 'COMPLETED_GOALS':
			return state.map(g => goal(g,action));
		default:
		return state;
	}
};

const visibilityFilter = (
	state = 'SHOW_ALL',
	action ) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
		return action.filter;
		default:
		return state;
	}
}

const setgoalApp = combineReducers({
	goals,
	visibilityFilter
});

export default setgoalApp;