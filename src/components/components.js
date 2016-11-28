
// export function Todo(props){
// 	const {todo} = props;

// 	if(todo.isDone){
// 		return <strike>{todo.text}</strike>;
// 	} else {
// 		return <span>{todo.text}</span>;
// 	}
// }

// export function TodoList(props){
// 	const {todos} = props;
// 	return (

// 	<div className="todo">
// 		<input type="text" placeholder="Enter Here"/>
// 		<ul className="listOfGoals">
// 		{todos.map(t => (
// 		<li key={t.id} className="item">
// 		<Todo todo={t}/>
// 		</li>
// 		))}
// 		</ul>
// 	</div>
// 	);
// }