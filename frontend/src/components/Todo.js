import React from 'react';
import axios from 'axios';

function TodoItems(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`).then(res => console.log(res));
    }

    return(
        <div>
            <p>
                <span style={{fontWeight: 'bold, underline'}}>{props.todo.title}: </span>
                {props.todo.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger m-2" style={{'borderRadius': '50Px'}}>X</button>
            </p>
        </div>
    )
}

export default TodoItems;
