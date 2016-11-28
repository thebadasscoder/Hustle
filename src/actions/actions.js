//ADDING MAIN GOAL COMPONENT
export const mainGoal = (text) => {
	return {
		type:'MAIN_GOAL',
		text
	};
};

// ADDING  SUBGOALS COMPONENT 

export const addGoals = (text) =>{
	return {
		type:'ADD_GOALS',
		id:0,
		text,
		completed:false
	};
}
//GOALS THAT ARE COMPLETED COMPONENT 
export const completedGoals = (index) =>{
	return {
		type:'COMPLETED_GOALS',
		index
	};
}
//SHOW ALL GOALS COMPONENT 
export const showAll = (index) =>{
	return{
		type:'SHOW_ALL',
		index
	};
}
//FILTER GOALS COMPONENT 
export const visiblityFilter = (filter) =>{
	return{
		type:'SET_VISIBILITY_FILTER',
		filter
	};
}