import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggleComplete(todo.id)} 
                />
                <span>{todo.text}</span>
            </div>
            <button 
                className="delete-btn" 
                onClick={() => onDelete(todo.id)}
            >
                삭제
            </button>
        </li>
    );
};

export default TodoItem; 