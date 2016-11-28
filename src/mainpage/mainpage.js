import React from 'react';
import store from '../store/store.js';


var mainPage = React.createClass({
	render:function(){
		return(
		<div className="focus">
			<h1 className="title">HUSTLE</h1>
			<input type="text" ref={node => {
				this.input.node;
			}}/>

			<input onSubmit={() => {
				store.dispatch({
					type:'MAIN_GOAL',
					text: this.input.value
				});
				this.input.value = '';
			}}/>
		</div>
		)
	}
});

export default mainPage;