import ActionTypes from '../constants/actionTypes';

const BASE_URL = 'https://todolist-redux-b94a8.firebaseio.com/todos';

export function getTodos() {
  return (dispatch) => {
    fetch(`${BASE_URL}.json`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(todosData => {
        const loadedTodos = [];
        for (const key in todosData) {
          loadedTodos.push({
            id: key,
            title: todosData[key].title,
          });
        }

        dispatch(setTodos(loadedTodos));
      });
  };
}

// Add todos
export function addTodos(todo) {
  return (dispatch) => {
    fetch(`${BASE_URL}.json`, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(todoData => {
        dispatch({
          type: ActionTypes.ADD_TODO,
          todo: { id: todoData.name, ...todo }
        });
      });
  };
}

// Delete todo
export function deleteTodo(todoId) {
  return (dispatch) => {
    fetch(
      `${BASE_URL}/${todoId}.json`,
      {
        method: 'DELETE'
      }
    )
      .then(() => {
        dispatch({
          type: ActionTypes.DELETE_TODO, id: todoId
        });
      })
      .catch(() => {
        throw new Error('Error here');
      });
  };
}

// Set todos
export function setTodos(todos) {
  return {
    type: ActionTypes.SET_TODOS,
    todos
  };
}
