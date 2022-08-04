import React, { useContext } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Content from "./components/useContext/Content";
import {ThemeContext} from './components/useContext/ThemeContext'
import {ThemeProvider} from './components/useContext/ThemeContext'

function App() {
  const context = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <Clock />
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
