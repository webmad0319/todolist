import React from 'react';
import './App.css';
import TodoList from './TodoList';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoList></TodoList>
      </React.Fragment>
    )
  }
}

export default App;
