import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="할일을 입력하세요!!" 
                className="todo-input"
            />
            <button type="submit" className="add-btn">추가</button>
        </form>
    );
};

export default AddTodo; 