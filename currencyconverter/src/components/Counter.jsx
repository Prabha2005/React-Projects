// src/components/Counter.jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0, message: '' };
    this.increment = this.increment.bind(this);         // show binding / use 'this'
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  // Increase must invoke multiple methods
  increment(){
    this.incrementValue();
    this.sayHello();
  }

  incrementValue(){
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  sayHello(){
    // static message after increment
    this.setState({ message: 'Hello — static message' });
  }

  // button that accepts an argument
  sayMessage(msg){
    this.setState({ message: msg });
  }

  // synthetic event handler (web React: onClick; React Native: onPress)
  handleOnPress(e){
    e.preventDefault();
    this.setState({ message: 'I was clicked' });
    // e is a React SyntheticEvent
  }

  render(){
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increase</button>
        <button onClick={() => this.setState(prev => ({ count: prev.count - 1 }))}>Decrement</button>
        <button onClick={() => this.sayMessage('welcome')}>Say Welcome</button>
        <button onClick={this.handleOnPress}>Synthetic OnPress (onClick)</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Counter;
