import Game from "./components/Game";
import Clock from "./components/Clock";
import NumberList from "./components/List";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>React started</h2>
      <Game />
      <Clock />
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
