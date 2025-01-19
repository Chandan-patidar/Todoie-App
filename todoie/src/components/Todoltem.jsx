import React from 'react';

const TodoItem = () => {
    return(
        <li className="todio-iteam">
            <span>
        <input type="chechbox"/>
        <span className="todo-item-text">Eat</span>
        </span>
        <p>...</p>
        </li>
    ); 
};

export default TodoItem;