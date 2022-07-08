import TodoItems from './Todo';

function TodoView(props) {
    const todoList = props.todoList;

    return(
        <div>
            <ul>
                {todoList.map((todo, index) => <TodoItems todo={todo} key={index}/>)}
            </ul>
        </div>
    )
}

export default TodoView;
