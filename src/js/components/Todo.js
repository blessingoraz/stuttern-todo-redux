import React from 'react';
import Card from '../UI/Card';
import './Todo.css';

import TodoList from './TodoList';

const Todo = ({todo, todos, deleteTodo, changeTodo, submitTodo}) => {
  const submit = event => {
    event.preventDefault();
    submitTodo();
  };

  return (
    <>
    <section className="todo-form">
      <Card>
        <form onSubmit={submit}>
          <div className="form-control">
            <label htmlFor="amount">Todo</label>
            <input
              type="text"
              id="todo"
              value={todo}
              onChange={changeTodo}
            />
          </div>
          <div className="todo-form__actions">
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </Card>
    </section>
    
    <section>
      {todos && <TodoList todos={todos} onRemoveItem={deleteTodo} />} 
    </section>
    </>
  );
};

export default Todo;

