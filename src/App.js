import Game from "./components/TicTacToe/Game";
import Clock from "./components/Clock";
import NumberList from "./components/List";
import NameForm from "./components/Forms/Forms";
import Calulator from "./components/Lifting State Up/BoilWater";
import Welcome from "./components/Composition/Welcome";
import IncreDecre from "./components/IncreDecre";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Welcome />
      <Clock />
      <h2>React started</h2>
      <h3>Tic-tac-toe Game</h3>
      <Game />
      <h3>List in React</h3>
      <NumberList numbers={numbers} />
      <h3>Form in React</h3>
      <NameForm />
      <Calulator />
      <IncreDecre />
    </div>
  );
}

export default App;
