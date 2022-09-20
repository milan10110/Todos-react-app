import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const handleComplete = (i) => {
    setTodos(todos.map((todo, k) => (k === i) ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  }

  const handleDelete = (e, i) => {
    e.preventDefault();
    setTodos(todos.filter((todo, k) => { if (k !== i) { return todo } }))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (

    <div className="app">
      <h1 className='title'>todos</h1>

      {/* todos */}
      <div className='todos'>
        <Form onSubmit={text => setTodos([...todos, { text, isCompleted: false }])} />
        <ul>
          {
            todos.map((todo, i) => (
              <li
                className={`item ${todo.isCompleted ? "completed" : ""}`}
                key={i}
                onClick={() => handleComplete(i)}
                onContextMenu={(e) => handleDelete(e, i)}
              >{todo.text}
              </li>
            ))
          }
        </ul>
      </div>

      <div className='instructions'>
        <p>Left click to toggle completed.</p>
        <p>Right click to delete todo</p>
      </div>
    </div>
  );
}

export default App;
