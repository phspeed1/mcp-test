import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete, onEdit }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onDelete={onDelete} 
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList; 