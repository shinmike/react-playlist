var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import { Router, Route, browserHistory, Link } from 'react-router';

// module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = React.createClass({
  render: function () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
});

// Todo component
var TodoComponent = React.createClass({
  getInitialState: function () {
    return {
      todos: ['eat', 'sleep', 'code', 'repeat'],
    }
  },

  render: function () {
    var todos = this.state.todos;
    todos = todos.map(function (item, index) {
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));
    return (
      <div id="todo-list">
        <Link to={'/about'}>About</Link>
        <p>What to do...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }, // render

  // custom functions
  onDelete: function (item) {
    var updatedTodos = this.state.todos.filter(function (val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function (item) {
    var addedTodos = this.state.todos.concat(item);
    this.setState({
      todos: addedTodos
    });
  }
});

// put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));