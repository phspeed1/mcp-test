import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState(() => {
    // 로컬 스토리지에서 저장된 할일 목록 불러오기
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새로운 할일 추가
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString()
    };
    setTodos([...todos, newTodo]);
  };

  // 할일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 할일 완료 상태 토글
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>오늘의 할일 목록</h1>
        <AddTodo onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onDelete={deleteTodo} 
          onToggleComplete={toggleComplete} 
        />
      </div>
    </div>
  );
}

export default App;
