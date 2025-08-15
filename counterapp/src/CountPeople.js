import React, { Component } from 'react';
import './CounterStyle.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState(prevState => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState(prevState => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div className="count-wrapper">
        <div className="count-box">
          <button className="btn" onClick={this.updateEntry}>Login</button>
          <span>{this.state.entryCount} People Entered!!!</span>
        </div>

        <div className="count-box">
          <button className="btn" onClick={this.updateExit}>Exit</button>
          <span>{this.state.exitCount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
