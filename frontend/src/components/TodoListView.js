import TodoItems from './Todo';

function TodoView(props) {
    return(
        <div>
            <ul>
                {props.todoList.map((todo, index) => <TodoItems todo={todo} key={index}/>)}
            </ul>
        </div>
    )
}

export default TodoView;
