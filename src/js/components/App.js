import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos, addTodos, deleteTodo } from '../actions/todo';
import Todo from './Todo';

class App extends Component {
  state = {
    currentTodo: ''
  }

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  changeTodoHandler = (event) => {
    const { value } = event.target;

    this.setState({
      currentTodo: value,
    });
  }

  submitTodoHandler = () => {
    const { currentTodo } = this.state;

    if (currentTodo !== '') {
      this.props.dispatch(addTodos({title: currentTodo}));
      this.setState({
        currentTodo: '',
      });
    }
  }

  deleteTodoHandler = (todoIndex) => {
    this.props.dispatch(deleteTodo(todoIndex));
  }

  render() {
    const { todosStore: todos } = this.props;
    const { currentTodo } = this.state;
  
    return (
      <Todo
        todo={currentTodo}
        todos={todos}
        deleteTodo={this.deleteTodoHandler}
        changeTodo={this.changeTodoHandler}
        submitTodo={this.submitTodoHandler}
      />
    );
  }
}

// Connect App to the Redux store so that it has this.props.matchesStore
const mapStateToProps = (state) => {
  return {
    todosStore: state.todos
  };
};

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;