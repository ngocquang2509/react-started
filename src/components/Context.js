import React, { useState, useContext } from "react";

const CounterContext = React.createContext();
class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          countUp: this.countUp.bind(this),
          countDown: this.countDown.bind(this),
        }}
      >
        <Counter />
      </CounterContext.Provider>
    );
  }
}

const Counter = () => {
  const counter = useContext(CounterContext);

  return (
    <div>
      <h1>{counter.count}</h1>
      <button
        onClick={() => {
          counter.countUp();
        }}
      >
        Plus
      </button>
      <button
        onClick={() => {
          counter.countDown();
        }}
      >
        Minus
      </button>
    </div>
  );
};

export default Context;
