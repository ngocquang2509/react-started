import React, { useReducer } from "react";
import "./App.css";
import Clock from "./components/Clock";
// import Content from "./components/useContext/Content";
// import {ThemeContext} from './components/useContext/ThemeContext'
// import {ThemeProvider} from './components/useContext/ThemeContext'

// Init state
const initState = 0;

// Define actions
const INCRE_ACTION = "up";
const DECRE_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case INCRE_ACTION:
      return state + 1;
    case DECRE_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  //const context = useContext(ThemeContext);
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <>
      {/* <ThemeProvider>
        
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </ThemeProvider> */}
      <Clock />
      <h1>{count}</h1>
      <button onClick={() => dispatch(DECRE_ACTION)}>Down</button>
      <button onClick={() => dispatch(INCRE_ACTION)}>Up</button>
    </>
  );
}

export default App;
