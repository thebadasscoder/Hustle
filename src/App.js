import React from 'react';
import ReactDOM from 'react-dom';
import store from '../src/store/store.js';
import ReactCountdownClock from 'react-countdown-clock';
import mainPage from '../src/mainpage/mainpage.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const getVisibleGoals = (
	goals,
	filter
) => {
		switch(filter){
		case 'SHOW_ALL':
		return goals;

		case 'SHOW_COMPLETED':
		return goals.filter(
		g => g.completed
		);

		case 'SHOW_ACTIVE':
		return goals.filter(g => !g.completed);

		default:
		return goals;
	}
}

const FilterLink =({
	filter,
	currentFilter,
	children
}) => {
	if(filter === currentFilter){
		return <span>{children}</span>
	}
	return (
		<a href='#' onClick={e => {
			e.preventDefault();
			store.dispatch({
				type:'SET_VISIBILITY_FILTER',
				filter
			});
		}}
		> {children}</a>
	)
}



let nextTodoId = 0;

var App = React.createClass({
	
	render:function(){
		const {
			goals,
			visibilityFilter
		} = this.props;
		const visibleGoals = getVisibleGoals(goals,visibilityFilter)
		return (
			<div className="main">
			<center>
				<div className="currentGoal"><h3>H U S T L E</h3></div>
				
				<input type="text" className="form-control"ref={node => {
					this.input = node;
				}}/>
				<div className="add"><button className="btn btn-default" onClick={() => {
					store.dispatch ({ 
					type: 'ADD_GOAL',
					text:this.input.value,
					id:nextTodoId++ 
					}); 
				 		this.input.value = ''; 
					}}>
						+
					</button></div>

				<ul> 
					{visibleGoals.map(goal => <li key={goal.id} onClick={()=>{store.dispatch({
							type:'COMPLETED_GOALS',
							id:goal.id 
							}); 
						}} 
						style={{
							textDecoration:
							goal.completed ? 
							'line-through': 
							'none'
						}}>
						{goal.text}
						<i className="fa fa-play-circle-o"></i>
						</li>	
					)}
				</ul>
				<p id="filter"> SHOW: 

					{' '}<FilterLink filter='SHOW_ALL'
					 currentFilter={visibilityFilter}>ALL</FilterLink>

					{' '}<FilterLink filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>ACTIVE</FilterLink>

					{' '}<FilterLink filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>
						COMPLETED</FilterLink>
				</p>
				</center>
				<div className="counter">
					<ReactCountdownClock seconds={120} color="#6a00ff" alpha={0.5} size={300} weight={10}  fontsize="auto" font="Dense" timeFormat='hms'/>
				</div>
			</div>
		);
	}	
});

const render = () => ReactDOM.render(
	<App {...store.getState()}/>,
	document.getElementById('root')
);

render();
store.subscribe(render);
