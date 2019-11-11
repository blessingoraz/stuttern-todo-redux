import React from 'react';
import './TodoList.css';

const TodoList = ({todos, onRemoveItem}) => {
  return (
    <section className="ingredient-list">
      <h2>Todos List</h2>
      <ul>
        {todos && todos.map(td => (
          <li key={td.id} onClick={onRemoveItem.bind(this, td.id)}>
            <span>{td.title}</span>
            <span>x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;