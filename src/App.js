import Game from "./components/Game";
import Clock from "./components/Clock";
import NumberList from "./components/List";
import NameForm from "./components/Forms";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>React started</h2>
      <Game />
      <Clock />
      <NumberList numbers={numbers} />
      <NameForm />
    </div>
  );
}

export default App;