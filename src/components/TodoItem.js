import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && editText.trim()) {
            onEdit(todo.id, editText);
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditText(todo.text);
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggleComplete(todo.id)} 
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="edit-input"
                    />
                ) : (
                    <div className="todo-info">
                        <span className="todo-text">{todo.text}</span>
                        <span className="todo-date">{todo.date}</span>
                    </div>
                )}
            </div>
            <div className="todo-actions">
                {isEditing ? (
                    <>
                        <button className="save-btn" onClick={handleEdit}>저장</button>
                        <button className="cancel-btn" onClick={handleCancel}>취소</button>
                    </>
                ) : (
                    <>
                        <button className="edit-btn" onClick={handleEdit}>수정</button>
                        <button className="delete-btn" onClick={() => onDelete(todo.id)}>삭제</button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TodoItem; 