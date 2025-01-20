import React from 'react';

const TodoItem = (props) => {
    return(
        <li className="todio-iteam">
            <span>
        <input type="chechbox"/>
        <span className="todo-item-text">{props.text}</span>
        </span>
        <p>...</p>
        </li>
    ); 
};

export default TodoItem;