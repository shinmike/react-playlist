var React = require('react');
var ReactDOM = require('react-dom');

// create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap','buy flowers'],
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} />
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <p onClick={this.clicked}>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }, // render

  // custom functions
  clicked: function(){
    console.log('you clicked me!');
  }

});

// create TodoItem Component
var TodoItem = React.createClass({
  render: function(){
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
})

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));